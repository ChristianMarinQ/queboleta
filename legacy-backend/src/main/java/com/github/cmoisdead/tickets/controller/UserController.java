package com.github.cmoisdead.tickets.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.github.cmoisdead.tickets.dto.user.UserCreateDTO;
import com.github.cmoisdead.tickets.model.User;
import com.github.cmoisdead.tickets.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    /**
     * Gets all users.
     *
     * @return ResponseEntity with the list of all users.
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(users);
    }

    /**
     * Gets a user by ID.
     *
     * @param id The ID of the user to retrieve.
     * @return ResponseEntity with the user details.
     */
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        Optional<User> optional = userService.findById(id);
        if (optional.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.status(HttpStatus.OK).body(optional.get());
    }

    /**
     * Gets a user by email.
     *
     * @param email The email of the user to retrieve.
     * @return ResponseEntity with the user details.
     */
    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> optional = userService.findByEmail(email);
        if (optional.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.status(HttpStatus.OK).body(optional.get());
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        Optional<User> optional = userService.findByUsername(username);
        if (optional.isEmpty()) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        return ResponseEntity.status(HttpStatus.OK).body(optional.get());
    }

    /**
     * Creates a new user.
     *
     * @param userCreateDTO The user details to create.
     * @return ResponseEntity with the created user.
     */
    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody UserCreateDTO userCreateDTO) {
        User createdUser = userService.save(userCreateDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
    }

    /**
     * Updates an existing user.
     *
     * @param id   The ID of the user to update.
     * @param user The new user details.
     * @return ResponseEntity with the updated user.
     */
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
        user.setId(id);
        User updatedUser = userService.update(user);
        return ResponseEntity.ok(updatedUser);
    }

    /**
     * Updates the user's password.
     *
     * @param id       The ID of the user whose password will be updated.
     * @param password The new password.
     * @return ResponseEntity with the updated user.
     */
    @PutMapping("/{id}/password")
    public ResponseEntity<User> updatePassword(@PathVariable String id, @RequestBody String password) {
        User updatedUser = userService.updatePassword(id, password);
        return ResponseEntity.status(HttpStatus.OK).body(updatedUser);
    }


    @GetMapping("/me")
    public ResponseEntity<User> getUserByToken(@CookieValue("token") String token) {
        try {
            User user = userService.findByToken(token);
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (Exception e) {
            ResponseCookie cookie = ResponseCookie.from("token", "").httpOnly(true).path("/").build();
            HttpHeaders headers = new HttpHeaders();
            headers.add(HttpHeaders.SET_COOKIE, cookie.toString());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).headers(headers).build();
        }
    }

    // desactivate and delete account
    @DeleteMapping("/{id}/delete")
    public ResponseEntity<String> deleteUser(@PathVariable String id) {
        try {
            userService.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("User deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
    }

    @PutMapping("/{id}/desactivate")
    public ResponseEntity<User> desactivateUser(@PathVariable String id) {
        try {
            User user = userService.desactivateUser(id);
            return ResponseEntity.status(HttpStatus.OK).body(user);
        } catch (Exception e) {
            if (e.getMessage().equals("User not found")) return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
