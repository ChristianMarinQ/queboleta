import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function TermPage() {
  return (
    <main className="container mx-auto max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-balance text-4xl font-bold">Terms of Service</h1>
        <p className="text-lg text-muted-foreground">
          Last Updated: January 18, 2025
        </p>
      </div>

      <Card>
        <CardContent className="py-8">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              1. Agreement to Terms
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              By accessing or using QueBoleta's ticket purchasing platform
              ("Service"), you agree to be bound by these Terms of Service
              ("Terms"). If you disagree with any part of these terms, you may
              not access the Service.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              QueBoleta reserves the right to modify or replace these Terms at
              any time. Your continued use of the Service after any changes
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              2. Ticket Purchases
            </h2>
            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              2.1 Purchase Process
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              When you purchase tickets through QueBoleta, you are entering into
              a binding contract. All ticket sales are final unless the event is
              cancelled, postponed, or rescheduled.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              2.2 Pricing and Fees
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              All prices are displayed in the local currency and include
              applicable service fees and taxes. QueBoleta reserves the right to
              modify pricing at any time, but changes will not affect orders
              already placed.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              2.3 Payment Methods
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              We accept major credit cards, debit cards, and other payment
              methods as displayed at checkout. Payment information is processed
              securely through our third-party payment processors.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              3. Refunds and Cancellations
            </h2>
            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              3.1 Event Cancellation
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If an event is cancelled and not rescheduled, you will receive a
              full refund including service fees within 14 business days to your
              original payment method.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              3.2 Event Postponement or Rescheduling
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If an event is postponed or rescheduled, your tickets will be
              valid for the new date. If you cannot attend the rescheduled
              event, you may request a refund within 30 days of the
              announcement.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              3.3 Customer-Initiated Cancellations
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Tickets are generally non-refundable unless otherwise stated. In
              exceptional circumstances, refund requests may be considered on a
              case-by-case basis at QueBoleta's sole discretion.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              4. Ticket Transfer and Resale
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Tickets may be transferred to another person through QueBoleta's
              official transfer system, subject to event organizer approval.
              Unauthorized resale or transfer of tickets may result in ticket
              cancellation without refund.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              QueBoleta prohibits the resale of tickets at prices exceeding face
              value plus applicable fees, except through our authorized resale
              marketplace where permitted by law.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              5. User Accounts
            </h2>
            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              5.1 Account Creation
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              You must create an account to purchase tickets. You are
              responsible for maintaining the confidentiality of your account
              credentials and for all activities under your account.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              5.2 Account Security
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              You must notify QueBoleta immediately of any unauthorized use of
              your account. QueBoleta is not liable for any loss or damage
              arising from your failure to protect your account information.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              5.3 Account Termination
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              QueBoleta reserves the right to suspend or terminate accounts that
              violate these Terms or engage in fraudulent activity.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              6. Prohibited Conduct
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              You agree not to:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
              <li>Use automated systems or bots to purchase tickets</li>
              <li>
                Purchase tickets for resale in violation of applicable laws
              </li>
              <li>Provide false or misleading information</li>
              <li>
                Attempt to circumvent security measures or access restrictions
              </li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              7. Intellectual Property
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              All content on the QueBoleta platform, including text, graphics,
              logos, images, and software, is the property of QueBoleta or its
              licensors and is protected by copyright, trademark, and other
              intellectual property laws.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              You may not reproduce, distribute, modify, or create derivative
              works from any content without express written permission from
              QueBoleta.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              8. Limitation of Liability
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              QueBoleta acts as an intermediary between ticket buyers and event
              organizers. We are not responsible for the quality, safety, or
              legality of events, the accuracy of event listings, or the ability
              of event organizers to fulfill their obligations.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              To the maximum extent permitted by law, QueBoleta shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or other
              intangible losses.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our total liability for any claims arising from your use of the
              Service shall not exceed the amount you paid for tickets in the
              transaction giving rise to the claim.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              9. Indemnification
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              You agree to indemnify and hold harmless QueBoleta, its
              affiliates, officers, directors, employees, and agents from any
              claims, damages, losses, liabilities, and expenses (including
              legal fees) arising from your use of the Service or violation of
              these Terms.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              10. Dispute Resolution
            </h2>
            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              10.1 Governing Law
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which QueBoleta operates, without
              regard to conflict of law principles.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              10.2 Arbitration
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Any disputes arising from these Terms or your use of the Service
              shall be resolved through binding arbitration, except where
              prohibited by law. You waive your right to participate in class
              action lawsuits.
            </p>

            <h3 className="mb-3 mt-6 text-xl font-medium text-foreground">
              10.3 Exceptions
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Either party may seek injunctive relief in court for intellectual
              property infringement or unauthorized access to the Service.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              11. Privacy
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Your use of the Service is also governed by our Privacy Policy,
              which describes how we collect, use, and protect your personal
              information. By using the Service, you consent to our privacy
              practices as described in the Privacy Policy.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              12. Force Majeure
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              QueBoleta shall not be liable for any failure to perform its
              obligations due to circumstances beyond its reasonable control,
              including natural disasters, war, terrorism, riots, embargoes,
              acts of civil or military authorities, fire, floods, accidents,
              pandemics, strikes, or shortages of transportation facilities,
              fuel, energy, labor, or materials.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              13. Severability
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision shall be limited or eliminated to the
              minimum extent necessary, and the remaining provisions shall
              remain in full force and effect.
            </p>
          </section>

          <Separator className="my-8" />

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              14. Contact Information
            </h2>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              If you have any questions about these Terms of Service, please
              contact us:
            </p>
            <div className="rounded-lg bg-muted p-4">
              <p className="mb-2 font-medium text-foreground">
                QueBoleta Customer Support
              </p>
              <p className="text-muted-foreground">
                Email: queboletas@gmail.com.com
              </p>
              <p className="text-muted-foreground">Phone: 1-800-BOLETA-1</p>
              <p className="text-muted-foreground">
                Address: 123 Ticket Lane, Suite 100, Event City, EC 12345
              </p>
            </div>
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              15. Entire Agreement
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              These Terms of Service, together with our Privacy Policy and any
              other legal notices published by QueBoleta, constitute the entire
              agreement between you and QueBoleta concerning your use of the
              Service.
            </p>
          </section>
        </CardContent>
      </Card>

      <div className="text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          By using QueBoleta, you acknowledge that you have read, understood,
          and agree to be bound by these Terms of Service.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </main>
  );
}
