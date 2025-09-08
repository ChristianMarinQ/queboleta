package com.github.cmoisdead.tickets.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.cmoisdead.tickets.dto.coupon.CouponCreateDTO;
import com.github.cmoisdead.tickets.dto.utils.EmailDTO;
import com.github.cmoisdead.tickets.model.Coupon;
import com.github.cmoisdead.tickets.model.User;
import com.github.cmoisdead.tickets.repository.CouponRepository;
import com.github.cmoisdead.tickets.repository.UserRepository;

@Service
public class CouponService {
    @Autowired
    private CouponRepository couponRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserRepository userRepository;

    /**
     * find all coupons on the database
     *
     * @return coupon list
     */
    public List<Coupon> findAll() {
        return couponRepository.findAll();
    }

    /**
     * find a coupon by id
     *
     * @param id coupon id
     * @return coupon if found
     */
    public Optional<Coupon> findById(String id) {
        return couponRepository.findById(id);
    }

    /**
     * save a new coupon in the database
     *
     * @param coupon coupon to save
     * @return coupon dbObject
     * @throws Exception
     */
    public Coupon save(CouponCreateDTO dto) throws Exception {

        Coupon build = Coupon.builder()
                .code(dto.code())
                .name(dto.name())
                .description(dto.description())
                .discount(dto.discount())
                .expiryDate(dto.expiryDate())
                .build();

        Coupon coupon = couponRepository.save(build);

        if (!Objects.equals(dto.userId(), "")) {
            Optional<User> optional = userRepository.findById(dto.userId());
            if (optional.isEmpty())
                throw new Error("User not found");

            User user = optional.get();
            EmailDTO message = new EmailDTO(
                    true,
                    "coupon",
                    "Nuevo Cupon Recibido",
                    user.getEmail(),
                    "QueBoleta.com",
                    "Felicidades recibiste el siguiente cupon: " + coupon.getName());
            emailService.sendEmail(message);
        }

        return coupon;
    }

    /**
     * delete a coupon by id
     *
     * @param id coupon id
     */
    public void deleteById(String id) {
        couponRepository.deleteById(id);
    }

    public Coupon verifyCoupon(String code) throws Exception {
        Optional<Coupon> coupon = couponRepository.findByCode(code);
        if (coupon.isEmpty())
            throw new Exception("Coupon not found");
        return coupon.get();
    }

    /**
     * expire a coupon by id
     *
     * @param id coupon id
     * @throws throw new Error("Coupon not found"); error if coupon not found
     */
    public void expireById(String id) {
        Optional<Coupon> optional = couponRepository.findById(id);
        if (optional.isEmpty())
            throw new Error("Coupon not found");

        Coupon coupon = optional.get();

        coupon.setExpired(true);
    }

    /**
     * expire coupon by code
     *
     * @param code coupon code
     * @throws throw new Error("Coupon not found"); error if coupon not found
     */
    public void expireByCode(String code) {
        Optional<Coupon> optional = couponRepository.findByCode(code);
        if (optional.isEmpty())
            throw new Error("Coupon not found");

        Coupon coupon = optional.get();

        coupon.setExpired(true);
    }

    /**
     * reddem a global coupon
     *
     * @param code   global coupone code
     * @param userId user id
     * @return coupon redeemed
     * @throws throw new Error("Coupon not found"); coupon not exist
     * @throws throw new Error("This coupon is not a global coupon."); coupon is not
     *               a global coupon
     * @throws throw new Error("This coupon is expired."); coupoun already expired
     * @throws throw new Error("This user already have used this coupon."); user
     *               already have used this coupon
     */
    public Coupon redeemGlobalCoupon(String code, String userId) {
        Optional<Coupon> optional = couponRepository.findByCode(code);
        if (optional.isEmpty())
            throw new Error("Coupon not found");

        Coupon coupon = optional.get();

        if (!coupon.isGlobal())
            throw new Error("This coupon is not a global coupon.");

        if (!coupon.getExpiryDate().isBefore(LocalDate.now()))
            throw new Error("This coupon is expired.");

        if (coupon.getUsedByUsers().contains(userId))
            throw new Error("This user already have used this coupon.");

        coupon.getUsedByUsers().add(userId);
        couponRepository.save(coupon);
        return coupon;
    }

    // TODO: work on the others coupons services
    public void redeemIndividualCoupon(String code, String userId) {
    }
}
