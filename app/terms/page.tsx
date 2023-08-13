import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Privacy Policy - Activepieces";
    const description = "Activepieces offers hundreds of apps to choose from to automate your work with."
    return {
        title: title,
        description: description,
        icons: "/favicon.ico",
        openGraph: {
            title: title,
            description: description,
            siteName: "Activepieces",
            images: [
                {
                    url: "https://www.activepieces.com/meta1.png",
                    width: 1200,
                    height: 630,
                    alt: "Activepieces",
                },
            ],
            url: "https://www.activepieces.com",
        }
    };
}

export default async function Privacy() {
    return (
        <div className="container mx-auto p-4 text-white">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-8">Last updated: March 11, 2022</p>
            <h2 className="text-xl font-semibold mb-4">Agreement To Terms</h2>
            <p className="mb-6">These Terms of Service constitute a legally binding agreement made between you, whether
                personally or on behalf of an entity (“you”) and Activepieces Inc. (“Company”, “we”, “us”, or “our”),
                concerning your access to and use of the <a href="https://www.activepieces.com"
                    className="text-blue-500 underline">https://www.activepieces.com</a> website as well as any other media
                form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto
                (collectively, the “Site”) and the Activepieces web-based, application and flow integration service
                accessed through the Site (“Service”). We are registered in Delaware, United States and have our registered
                office at 256 Chapman Rd 105 #4, Newark, DE 19702. You agree that by accessing the Site or the Service, you
                have read, understood, and agree to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH
                ALL OF THESE Terms of Service, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND THE SERVICE AND YOU
                MUST DISCONTINUE USE IMMEDIATELY.</p>

            <p className="mb-6">Supplemental terms and conditions or documents that may be posted on the Site from time to time
                are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to
                make changes or modifications to these Terms of Service at any time and for any reason. We will alert you
                about any changes by updating the “Last updated” date of these Terms of Service, and you waive any right to
                receive specific notice of each such change. Please ensure that you check the applicable Terms every time
                you use our Site or Service so that you understand which Terms apply. You will be subject to, and will be
                deemed to have been made aware of and to have accepted, the changes in any revised Terms of Service by your
                continued use of the Site after the date such revised Terms of Service are posted.</p>

            <p className="mb-8">The information provided on the Site is not intended for distribution to or use by any person or
                entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation
                or which would subject us to any registration requirement within such jurisdiction or country. Accordingly,
                those persons who choose to access the Site from other locations do so on their own initiative and are
                solely responsible for compliance with local laws, if and to the extent local laws are applicable. The Site
                is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or
                register for the Site.</p>

            <h2 className="text-xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p className="mb-6">(a) All the information and the materials (including, without limitation, the source code,
                databases, functionality, software, website designs, audio, video, text, photographs, and graphics) on the
                Site and/or the Service, excluding the Third Party Content (collectively, the “Content”) are owned or
                controlled by us or licensed to us, and are protected by copyright laws and various other intellectual
                property rights and unfair competition laws of the United States, international copyright laws, and
                international conventions. The Content is provided on the Site “AS IS” for your information and personal use
                only. Except as expressly provided in these Terms of Service, no part of the Site and/or the Service and no
                Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded,
                translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose
                whatsoever, without our express prior written permission.</p>

            <p className="mb-6">Provided that you are eligible to use the Site and the Service, you are granted a limited
                license to access and use the Site and the Service and to download or print a copy of any portion of the
                Content to which you have properly gained access solely for your personal, non-commercial use. We reserve
                all rights not expressly granted to you in and to the Site, the Service and the Content.</p>

            <p className="mb-6">(b) Third Party Content: In addition to Activepieces Content, the Site and/or the Service may
                contain information and materials provided to Activepieces by third parties (collectively, “Third Party
                Content”). Third Party Content is the copyrighted work of its owner, who expressly retains all right title
                and interest in and to the Third Party Content, including, without limitation, all intellectual property
                rights therein and thereto. In addition to being subject to these Terms of Service, Third Party Content may
                also be subject to different and/or additional terms of use and/or privacy policies of such third parties.
                Please contact the appropriate third party for further information regarding any such different and/or
                additional terms of use applicable to Third Party Content.</p>

            <p className="mb-6">(c) All trademarks, service marks and logos included on the Site and/or the Service (“Marks”) are
                the property of Activepieces or third parties, and you may not use such Marks without the express, prior
                written consent of Activepieces or the applicable third party.</p>

            <p className="mb-6">(d) We respect the intellectual property rights of others. If you believe that any material
                available on or through the Site infringes upon any copyright you own or control, please immediately notify
                us using the contact information provided below (a “Notification”). A copy of your Notification will be sent
                to the person who posted or stored the material addressed in the Notification. Please be advised that
                pursuant to applicable law you may be held liable for damages if you make material misrepresentations in a
                Notification. Thus, if you are not sure that material located on or linked to by the Site infringes your
                copyright, you should consider first contacting an attorney.</p>

            <h2 className="text-xl font-semibold mb-4">Export Control</h2>
            <p className="mb-8">You hereby represent and warrant that (i) you understand and acknowledge that some Content or
                components of the Service may be subject to export, re-export and import restrictions under applicable law,
                (ii) you will not use the Site, any Content or the Service in a manner that violates the U.S. Export
                Administration Act of 1979 and the regulations of the U.S. Department of Commerce and (iii) you are not
                located in, under the control of, or a national or resident of any country to which the United States has
                embargoed goods.</p>
            <h2 className="text-2xl font-bold mb-4">User Representations</h2>
            <p className="mb-6">
                By using the Site or the Service, you represent and warrant that: (1) all registration information you submit will
                be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly
                update such registration information as necessary; (3) you have the legal capacity and you agree to comply with
                these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access
                the Site or the Service through automated or non-human means, whether through a bot, script or otherwise; (6) you
                will not use the Site or the Service for any illegal or unauthorized purpose; (7) your use of the Site and the
                Service will not violate any applicable law or regulation; and (8) you are not on a list of persons barred you
                from receiving services under U.S. laws or other applicable jurisdiction and are not a resident of a sanctioned
                country by the OFAC in the United States.
            </p>

            <p className="mb-6">
                If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
                suspend or terminate your account and refuse any and all current or future use of the Site and the Service (or
                any portion thereof).
            </p>

            <h2 className="text-2xl font-bold mb-4">User Registration</h2>
            <p className="mb-6">
                (a) In order to access and use all of the features of the Service, you are required to open an account with the
                Service.
            </p>

            <p className="mb-6">
                You agree to keep your password confidential and will be responsible for all use of your account and password. We
                reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion,
                that such username is inappropriate, obscene, or otherwise objectionable.
            </p>

            <p className="mb-6">
                You agree that Activepieces will not under any circumstances be liable for any cost, loss, damages or expenses
                arising out of a failure by you to maintain the security of your password.
            </p>

            <p className="mb-6">
                (b) Team Accounts: You may be invited to establish or join an Activepieces team account (“Team Account”). Each
                Team Account will have an administrator who can accept or remove Team Account members. By agreeing to join a Team
                Account, you acknowledge that (i) your identity, including name, email address, and avatar (if any), may be
                disclosed to other Team Account members, and the Team Account administrator may also have access to your account
                data and usage, and (ii) your User Content may be viewable by all Team Account members. You will have the option
                to share with other Team Account members any integrations you have created and/or any third party applications
                with which you have connected.
            </p>

            <h2 className="text-2xl font-bold mb-4">Fees And Payment</h2>
            <p className="mb-6">
                (a) Fees: In order to access the Site and/or the Service or parts of them, you may be required to purchase or pay
                the applicable fees (“Fees”). You agree to provide current, complete, and accurate purchase and account
                information for all purchases made to access the Site and/or the Service. You further agree to promptly update
                account and payment information, including email address, payment method, and payment card expiration date, so
                that we can complete your transactions and contact you as needed. We bill you either through an online billing
                account or invoices emailed to your billing contact person. Sales tax will be added to the price of purchases as
                deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.
            </p>

            <p className="mb-6">
                You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to
                charge your chosen payment provider for any such amounts upon making your purchase. If your purchase is subject to
                recurring charges, then you consent to our charging your payment method on a recurring basis without requiring
                your prior approval for each recurring charge, until you notify us of your cancellation.
            </p>

            <p className="mb-6">
                We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received
                payment. We also reserve the right to refuse any order placed through the Site and/or the Service.
            </p>

            <p className="mb-6">
                (b) Cancellation and Termination by You: All purchases are non-refundable. You can cancel your subscription at any
                time by contacting us using the contact information provided below. Your cancellation will take effect at the end
                of the current paid term. If you cancel your User Account before the end of your current paid up term, you will
                not be charged again but we do not provide refunds for unused time in the last billing cycle.
            </p>

            <p className="mb-6">
                (c) Termination and Suspension by Activepieces: Activepieces may terminate your account and/or these Terms of
                Service at any time and for any reason upon notice to you. We may also suspend our Service to you at any time,
                with or without cause. If we terminate your account without cause, we will refund a prorated portion of your
                payment term’s prepayment. We will not refund or reimburse you if we terminate your account for cause, including
                (without limitation) for a violation of these Terms of Service.
            </p>

            <p className="mb-6">
                (d) Effect of Termination: Once your account is terminated, we may permanently delete your account and any or all
                User Content associated with it. If you do not log in to your User Account for 12 or more months, we may treat
                your account as “inactive” and permanently delete the account and all the data associated with it. Except where
                an exclusive remedy may be specified in this Agreement, the exercise by either party of any remedy, including
                termination, will be without prejudice to any other remedies it may have under these Terms of Service. All
                sections of this Agreement which by their nature should survive termination will survive, including without
                limitation, accrued rights to payment, use restrictions and indemnity obligations, confidentiality obligations,
                warranty disclaimers, and limitations of liability.
            </p>
            <h2 className="text-2xl font-bold mb-4">Paid Service</h2>
            <p className="mb-6">
                If you are paying Fees to use or access our Site or Service, you agree to the following terms:
            </p>

            <p className="mb-6">
                (a) Support: Subject to the terms of this Agreement, the Company will use commercially reasonable efforts to
                provide you the Service.
            </p>

            <p className="mb-6">
                (b) Confidentiality and Proprietary Rights: Both Activepieces and you (each such the “Receiving Party”) understand
                that the other party (the “Disclosing Party”) has disclosed or may disclose business, technical or financial
                information relating to the Disclosing Party’s business (hereinafter referred to as “Proprietary Information” of
                the Disclosing Party). Proprietary Information of Activepieces includes non-public information regarding
                features, functionality and performance of the Service. Proprietary Information of you includes non-public data
                provided by you to Activepieces to enable the provision of the Service. The Receiving Party agrees: (i) to take
                reasonable precautions to protect such Proprietary Information, and (ii) not to use (except in performance of the
                Service or as otherwise permitted herein) or divulge to any third person any such Proprietary Information. The
                Disclosing Party agrees that the foregoing shall not apply with respect to any information after five (5) years
                following the disclosure thereof or any information that the Receiving Party can document (a) is or becomes
                generally available to the public, or (b) was in its possession or known by it prior to receipt from the
                Disclosing Party, or (c) was rightfully disclosed to it without restriction by a third party, or (d) was
                independently developed without use of any Proprietary Information of the Disclosing Party or (e) is required to
                be disclosed by law.
            </p>

            <p className="mb-6">
                (c) Service Termination: The subscription specified in your agreement shall be automatically renewed for
                additional periods of the same duration as the Initial Service Term (collectively, the “Term”), unless you or
                Activepieces requests termination at least thirty (30) days prior to the end of the then-current Term.
            </p>

            <h2 className="text-2xl font-bold mb-4">User Of Service And Prohibited Activities</h2>
            <p className="mb-6">
                (a) You may use your User Account for the Service and/or Site only in accordance with these Terms of Service and
                only for lawful purposes. You are responsible for your own communications, including the upload, transmission and
                posting of information, and are responsible for the consequences of their posting on or through the Service or
                Site.
            </p>

            <p className="mb-6">
                (b) You may not access or use the Site for any purpose other than that for which we make the Site and/or the
                Service available. The Site and the Service may not be used in connection with any commercial endeavors except
                those that are specifically endorsed or approved by us.
            </p>

            <p className="mb-6">
                As a user of the Site and/or the Service, you agree not to:
            </p>

            <ul className="list-disc ml-8 mb-6">
                <li>Systematically retrieve data or other content from the Site and/or the Service to create or compile, directly
                    or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
                    information such as user passwords.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features
                    that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site, the
                    Service and/or the Content contained therein.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site or the Service.</li>
                <li>Use any information obtained from the Site and/or the Service in order to harass, abuse, or harm another
                    person.</li>
                <li>Make improper use of our support services or submit false reports of abuse or misconduct. Use the Site or the
                    Service in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Engage in unauthorized framing of or linking to the Site or the Service.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including
                    excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any
                    party’s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with
                    the use, features, functions, operation, or maintenance of the Site or the Service.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any
                    data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Delete the copyright or other proprietary rights notice from any Content.</li>
                <li>Attempt to impersonate another user or person or use the username of another user.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
                    information collection or transmission mechanism, including without limitation, clear graphics interchange
                    formats (“gifs”), 1x1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware”
                    or “passive collection mechanisms” or “pcms”).</li>
                <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the
                    Site or the Service.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the
                    Site or the Service to you.</li>
                <li>Attempt to bypass any measures of the Site or the Service designed to prevent or restrict access to the Site
                    and/or the Service, or any portion of them.</li>
                <li>Copy or adapt the Site’s or the Service’s software, including but not limited to HTML, JavaScript, or other
                    code.</li>
                <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the
                    software comprising or in any way making up a part of the Site and/or the Service.</li>
                <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or
                    distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or
                    offline reader that accesses the Site and/or the Service, or using or launching any unauthorized script or
                    other software.</li>
                <li>Use a buying agent or purchasing agent to make purchases on the Site and/or the Service.</li>
                <li>Make any unauthorized use of the Site and/or the Service, including collecting usernames and/or email
                    addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user
                    accounts by automated means or under false pretenses.</li>
                <li>Use the Site or the Service as part of any effort to compete with us or otherwise use the Site, the Service
                    and/or the Content for any revenue-generating endeavor or commercial enterprise.</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Linked Accounts And Services</h2>
            <p className="mb-6">
                The Site and/or Service may contain links to and integrations with third party websites and services (e.g., Gmail
                or Dropbox), and you agree that Activepieces provides links to and integrations with such websites and services
                solely as a convenience and has no responsibility for the content or availability of such websites or services,
                and that we does not endorse such websites or services (or any products or other services associated therewith).
                Access to any other internet site linked to the Site and/or Service is at your own risk, and Activepieces is not
                responsible for the accuracy or reliability of any information, data, opinions, advice or statements made on these
                sites. Your use of such websites and services will be subject to the terms applicable to each such website and
                service. You may not post a link that directs users to any content or information that would constitute a
                violation of these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold mb-4">Site Management</h2>
            <p className="mb-6">
                We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Service;
                (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of
                Service, including without limitation, reporting such user to law enforcement authorities; (3) in our sole
                discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the
                extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and
                without limitation, notice, or liability, to remove from the Site and/or the Service or otherwise disable all
                files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage
                the Site and/or the Service in a manner designed to protect our rights and property and to facilitate the proper
                functioning of the Site and/or the Service.
            </p>

            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p className="mb-6">
                These Terms of Service and your use of the Site are governed by and construed in accordance with the laws of the
                State of Delaware applicable to agreements made and to be entirely performed within the State of Delaware,
                without regard to its conflict of law principles.
            </p>

            <h2 className="text-2xl font-bold mb-4">Dispute Resolution</h2>
            <p className="mb-6">
                Any legal action of whatever nature brought by either you or us (collectively, the “Parties” and individually, a
                “Party”) shall be commenced or prosecuted in the state and federal courts located in Delaware, and the Parties
                hereby consent to, and waive all defenses of lack of personal jurisdiction and forum non conveniens with respect
                to venue and jurisdiction in such state and federal courts. Application of the United Nations Convention on
                Contracts for the International Sale of Goods and the Uniform Computer Information Transaction Act (UCITA) are
                excluded from these Terms of Service. In no event shall any claim, action, or proceeding brought by either Party
                related in any way to the Site be commenced more than one (1) years after the cause of action arose.
            </p>

            <h2 className="text-2xl font-bold mb-4">Limitations Of Liability</h2>
            <p className="mb-6">
                (a) Warranty Disclaimer: THE SITE, CONTENT AND SERVICE ARE PROVIDED STRICTLY ON AN “AS IS” AND “AS AVAILABLE”
                BASIS, AND ACTIVEPIECES MAKES NO WARRANTY THAT THE SITE, SERVICE OR SITE CONTENT ARE COMPLETE, SUITABLE FOR YOUR
                PURPOSE, RELIABLE, USEFUL OR ACCURATE, AND ON BEHALF OF ITSELF AND ITS LICENSORS, ACTIVEPIECES HEREBY EXPRESSLY
                DISCLAIMS ANY AND ALL IMPLIED, STATUTORY OR OTHER WARRANTIES WITH RESPECT TO THE SITE, SITE CONTENT AND SERVICE, OR
                THE AVAILABILITY OF THE FOREGOING, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NONINFRINGEMENT. THE ENTIRE RISK AS TO RESULTS OBTAINED THROUGH USE OF
                THE SITE, SERVICE AND/OR THE SITE CONTENT RESTS WITH YOU. ACTIVEPIECES AND ITS SUPPLIERS WILL NOT BE LIABLE OR
                RESPONSIBLE IN ANY WAY FOR ANY LOSSES OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF OR RELIANCE ON ANY
                MATERIAL CONTAINED ON THE SITE OR SERVICE. ACTIVEPIECES MAKES NO REPRESENTATION OR WARRANTY THAT THE AVAILABILITY
                OF THE SITE AND OR THE SERVICE WILL BE UNINTERRUPTED, OR THAT THE SITE, SERVICE AND/OR THE SITE CONTENT WILL BE
                ERROR FREE OR THAT ALL ERRORS WILL BE CORRECTED.
            </p>

            <p className="mb-6">
                (b) Limitation of Liability: TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE THAT ACTIVEPIECES SHALL
                NOT BE LIABLE TO YOU FOR ANY (A) INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, SPECIAL, EXEMPLARY OR STATUTORY
                DAMAGES (INCLUDING, WITHOUT LIMITATION, LOSS OF BUSINESS, LOSS OR PROFITS, LOSS OF REVENUE, LOSS OF DATA, LOSS OF
                GOODWILL OR FOR ANY COST OF COVER OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES), EVEN IF ACTIVEPIECES
                HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, AND REGARDLESS OF THE LEGAL THEORY UNDER WHICH DAMAGES ARE
                SOUGHT, WHETHER IN BREACH OF CONTRACT OR IN TORT, INCLUDING NEGLIGENCE OR (B) AMOUNTS IN THE AGGREGATE THAT EXCEED
                THE FEES PAID BY YOU TO ACTIVEPIECES HEREUNDER IN THE SIX (6) MONTHS PRECEDING THE DATE THE CLAIM AROSE.
            </p>
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p className="mb-6">
                (a) You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our
                respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or
                demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1)
                your Contributions; (2) use of the Site; (3) breach of these Terms of Service; (4) any breach of your
                representations and warranties set forth in these Terms of Service; (5) your violation of the rights of a third
                party, including but not limited to intellectual property rights; or (6) any overt harmful act toward any other
                user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at
                your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify
                us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts
                to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware
                of it.
            </p>

            <p>
                (b) Activepieces’ Indemnification Obligations: If you are a paying subscriber to the Service, Activepieces will
                defend you against any third party claim brought against you alleging that the use of such paid Service as
                permitted hereunder infringes the United States intellectual property rights of a third party, and Activepieces
                shall pay all costs and damages finally awarded against you by a court of competent jurisdiction as a result of
                any such claim; provided that you (a) promptly give written notice thereof to Activepieces; (b) give Activepieces
                sole control of the defense and settlement of the claim; and (c) provide to Activepieces all reasonable
                assistance. The foregoing shall not apply to any claim based upon or arising from (i) any use of the Service
                outside the scope of these Terms of Service, (ii) User Content, or (iii) a combination of the Service with any
                content or other technology not provided by Activepieces.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Data And Contributions</h2>
            <p className="mb-6">
                (a) Your Data: We will maintain certain data that you transmit to the Site and/or the Service for the purpose of
                managing the performance of the Site and/or the Service, as well as data relating to your use of the Site and/or
                the Service. Although we perform regular routine backups of data, you are solely responsible for all data that you
                transmit or that relates to any activity you have undertaken using the Site and/or the Service. You agree that we
                shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of
                action against us arising from any such loss or corruption of such data.
            </p>

            <p>
                You will retain ownership of any data, information or material originated by you that you transmit through the
                Service (&quot;User Content&quot;) - for example, User Content from your accounts with third party services (e.g., Gmail or
                Dropbox) that passes through the Service. You shall be solely responsible for the accuracy, quality, content and
                legality of User Content, the means by which User Content is acquired and the transmission of User Content outside
                of the Service. You represent and warrant that you have all rights necessary to transmit User Content through the
                Service and to otherwise have User Content used as part of the Service or as otherwise contemplated herein.
            </p>

            <p>
                (b) Your Posts: The Site and Service may include functionality that permits users to post content, images, audio
                files, text, logos, sample code or other materials or works in a manner that is intended to be viewed by other
                users (“Your Posts”), including for reviews and in forums (e.g., Community Forums or Public Support Issues). By
                submitting Your Posts to the Site and/or Service, you hereby grant to Activepieces a perpetual, irrevocable,
                royalty-free, worldwide, non-exclusive right and license, including the right to grant sublicenses to third
                parties, to use, reproduce, publicly display, publicly perform, prepare derivative works from and distribute Your
                Posts for any purpose. Activepieces may exercise all copyright, publicity and moral rights, in any media, with
                respect to Your Posts. In addition, you hereby irrevocably represent and warrant to Paragon that (i) you have all
                necessary power, authority, right, title and/or licenses to grant to Activepieces the foregoing right and license
                and (ii) the posting, submission and display by you of Your Posts on the Site or Service, and the exercise by
                Activepieces of the foregoing license does not and will not (1) violate any applicable law or government regulation
                or (2) infringe any right of publicity or invades the privacy of others, or any intellectual property right of any
                third party, (iii) none of Your Posts (1) will constitute obscene, pornographic, indecent, profane or otherwise
                objectionable material, (2) are discriminatory, hateful or bigoted toward, or abusive of, any group or individual,
                or (3) are libelous or defamatory.
            </p>

            <p>
                (c) Suggestions: You hereby grant to Activepieces a royalty-free, worldwide, transferable, sublicensable,
                irrevocable, perpetual license to use or incorporate into the Site, the Service and/or other Activepieces offerings
                any suggestions, enhancement requests, recommendations or other feedback provided by you to Activepieces that is
                related to the Site and/or the Service.
            </p>

            <p>
                (d) Aggregated and/or Anonymized Data: Notwithstanding anything to the contrary set forth herein or otherwise,
                Activepieces will have the right to collect and analyze data and other information relating to the provision, use
                or performance of the Site and/or Service and related systems and technologies (including information concerning
                User Content and data derived therefrom), and to aggregate and/or anonymize all such data and information.
                Activepieces will be free at any time to: (i) use such information and data to improve and enhance Activepieces’
                offerings; and (ii) disclose such data in aggregate or other de-identified form in connection with its business.
            </p>

            <h2 className="text-2xl font-bold mb-4">Electronic Communications, Transactions, And Signatures</h2>
            <p className="mb-6">
                Visiting the Site or the Service, sending us emails, and completing online forms constitute electronic
                communications. You consent to receive electronic communications, and you agree that all agreements, notices,
                disclosures, and other communications we provide to you electronically, via email and on the Site and/or the
                Service, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF
                ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
                RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements
                under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original
                signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any
                means other than electronic means.
            </p>

            <h2 className="text-2xl font-bold mb-4">Notices</h2>
            <p className="mb-6">
                Activepieces may give notice applicable to Activepieces’ general Service customer base by means of a general
                notice on the Service portal, and notices specific to you by electronic mail to your email address on record in
                your account or by written communication sent by first class mail or pre-paid post to your address on record in
                your account. If you have a dispute with Activepieces, wish to provide a notice under these Terms of Service, or
                become subject to insolvency or other similar legal proceedings, you must promptly send written notice to
                Activepieces, Inc., 256 Chapman Rd 105 #4, Newark, DE 19702; Attn: Legal.
            </p>

            <h2 className="text-2xl font-bold mb-4">General</h2>
            <p className="mb-6">
                Neither party may assign these Terms of Service without the prior written approval of the other, such approval not
                to be unreasonably withheld or delayed, provided that such approval shall not be required in connection with an
                assignment to an affiliate or to a successor to substantially all of such party’s assets or business related to
                these Terms of Service. No amendment, modification or waiver of any provision of these Terms of Service will be
                effective unless in writing and signed by an authorized representative of both parties. If any provision of these
                Terms of Service is held to be invalid or unenforceable, the remaining portions will remain in full force and
                effect and such provision will be enforced to the maximum extent possible so as to effect the intent of the parties
                and will be reformed to the extent necessary to make such provision valid and enforceable. No waiver of rights by
                either party may be implied from any actions or failures to enforce rights under these Terms of Service. These
                Terms of Service are intended to be and are solely for the benefit of Activepieces and you and do not create any
                right in favor of any third party. These Terms of Service will be governed by and construed in accordance with the
                laws of the State of Delaware, without reference to its conflict of laws principles. The Uniform Computer
                Information Transactions Act will not apply to this Agreement. All disputes arising out of or relating to these
                Terms of Service will be submitted to the exclusive jurisdiction of a court of competent jurisdiction located in
                Delaware, California, and each party irrevocably consents to such personal jurisdiction and waives all objections
                to this venue.
            </p>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
                In order to resolve a complaint regarding the Site, the Service or the Content or to receive further information
                regarding use of them, please contact us at:
            </p>
            <address>
                Activepieces Inc. <br />
                256 Chapman Rd 105 #4 <br />
                Newark, DE 19702 <br />
                United States <br />
                <a href="mailto:support@activepieces.com">support@activepieces.com</a>
            </address>
        </div>
    );
}


