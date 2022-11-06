import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import Header from '../../../../components/MyHeader';
import { toSize } from '../../../../globalStyle';
import { ScrollView } from 'react-native-gesture-handler';

export default function CreateAccountScreen() {
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <Text style={styles.MainText}>Terms of Use</Text>
        <View style={styles.borderline}></View>
        <ScrollView>
          <Text style={styles.normalText}>
            <Text style={styles.MainSubText}>
              Chapter 1 General Provisions {'\n'}
            </Text>
            {'\n'}
            <Text style={styles.subText}>Article 1 (Purpose) {'\n'}</Text>
            The purpose of this Agreement is to prescribe the rights,
            obligations, and responsibilities of the Company and its users in
            relation to the use of digital content (hereinafter referred to as
            "Contents") and services provided by Re-Kor (hereinafter referred to
            as "Company"). {'\n'}
            {'\n'}
            <Text style={styles.subText}>Article 2 (Definitions) {'\n'}</Text>
            The terms used in this Agreement are defined as follows: {'\n'}
            {'\n'}
            1. The term "company" means a person who conducts economic
            activities related to the "content" industry and provides content
            and various services. {'\n'}
            2. The term "user" refers to members and non-members who access the
            "company" site and use the "content" and various services provided
            by the "company" in accordance with these terms and conditions.{' '}
            {'\n'}
            3. The term "member" means a "user" who has signed a contract with
            the "company" and is given the "user" ID, who is continuously
            provided with the information of the "company" and can continuously
            use the services provided by the "company". {'\n'}
            4. The term "non-member" means a person who uses the services
            provided by the "company" rather than a "member". {'\n'}
            5. The term "content" means data or information expressed in sign,
            text, voice, sound, image, or video used in the information and
            communication network under Article 2 (1) 1 of the Act on Promotion
            of Information and Communication Network Utilization and Information
            Protection, etc. {'\n'}
            6. The term "ID" means a combination of letters or numbers
            determined by "members" and approved by "company" for the
            identification and use of services. {'\n'}
            7. The term "PASSWORD" means a combination of letters or numbers
            determined by the "member" for confidentiality after confirming that
            the "member" is a "member" that matches the "ID" given. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 3 (Provision of identity information, etc.) {'\n'}
            </Text>
            "Company" will post the contents of these terms and conditions,
            trade name, name of representative, address of business office
            (including address where consumer complaints can be handled), phone
            number, copy transfer number, e-mail address, business registration
            number, mail order number, and personal information management
            manager on the initial screen. However, the terms and conditions can
            be viewed by the user through the connection screen. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 4 (Posting of Terms and Conditions) {'\n'}
            </Text>
            ① "Company" will take technical measures to ensure that "Member" can
            print all of these terms and conditions and verify the terms and
            conditions during the transaction. {'\n'}② "Company" installs
            technical devices to enable "User" to query and respond to "Company"
            and to the contents of these Terms and Conditions. {'\n'}③ "Company"
            provides a separate connection screen or pop-up screen for users to
            easily understand important contents such as subscription withdrawal
            and refund conditions among the contents stipulated in the terms and
            conditions before "User" agrees to the terms and conditions. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 5 (Amendment of Terms and Conditions, etc) {'\n'}
            </Text>
            ① "Company" may amend these Terms to the extent that it does not
            violate relevant laws, such as the Online Digital Content Industry
            Development Act, the Consumer Protection Act in e-commerce, and the
            Regulation of Terms and Conditions. {'\n'}② If "Company" revises the
            terms and conditions, notify the initial screen of the service 7
            days before the application date and the reason for the revision,
            and send the revised terms and conditions to the existing members by
            e-mail. {'\n'}③ If the "Company" revises the terms and conditions,
            confirm whether the "User" agrees to the application of the revised
            terms and conditions after announcing the revised terms and
            conditions. If "User" does not agree to the application of the
            amended Terms, "Company" or "User" may terminate the Content Use
            Agreement. At this time, the "company" shall compensate the "user"
            for damages caused by the termination of the contract. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 6 (Interpretation of Terms and Conditions) {'\n'}
            </Text>
            Regarding matters not stipulated in these Terms and Conditions and
            interpretation of these Terms and Conditions, please refer to the
            Online Digital Content Industry Development Act, the Consumer
            Protection Act in Electronic Commerce, etc., the Act on the
            Regulation of Terms and Conditions, the Digital Content User
            Protection Guidelines set by the Minister of Culture, Sports and
            Tourism, etc. In accordance with relevant laws or commercial
            practices. {'\n'}
            {'\n'}
            <Text style={styles.MainSubText}>
              Chapter 2 Member Registration{'\n'}
            </Text>
            {'\n'}
            <Text style={styles.subText}>Article 7 (Membership) {'\n'}</Text>①
            Membership registration is concluded when the “user” agrees to the
            terms and conditions and applies for membership registration, and
            then the “company” approves these applications. {'\n'}② The
            following items must be stated in the membership registration
            application form. Items 1 to 3 are required items, and other items
            are optional. {'\n'}
            1. Member's name and resident registration number or personal
            identification number on the Internet{'\n'}
            2. "ID" and "Password"{'\n'}
            3. Email address{'\n'}
            4. The type of "content" you want to use{'\n'}
            5. Other matters deemed necessary by the "Company"{'\n'}③ In
            principle, the “Company” will accept membership registration in
            response to the application of the “User” above. However, the
            "Company" may not approve any application that falls under any of
            the following items. {'\n'}
            1. If the applicant for membership has previously lost membership
            due to these terms and conditions; {'\n'}
            2. If it is not your real name or if you use someone else's name
            {'\n'}
            3. If false information is entered or the content presented by the
            company is not entered 4. Approval is not possible due to reasons
            attributable to the user, or the application is made in violation of
            other stipulated matters. {'\n'}④ The “Company” may withhold
            approval if there is no room for service-related facilities or there
            are technical or business problems. {'\n'}⑤ If the application for
            membership is not approved or withheld according to paragraphs 3 and
            4, the 'Company' shall notify the applicant. An exception will be
            made if the applicant cannot be notified without reasons
            attributable to the "Company".{'\n'}
            (6) The membership registration contract shall be concluded at the
            time when the consent of the "Company" reaches the "User".{'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 8 (Special Provisions Concerning Membership of Minors){' '}
            </Text>
            {'\n'}① "Users" under the age of 14 must be fully familiar with the
            purpose of collecting and using personal information, apply for
            membership registration and provide their personal information after
            obtaining the consent of their legal representative. it won't work.{' '}
            {'\n'}② The Company will cancel or disallow subscription for users
            under the age of 14 who have not gone through the confirmation
            procedure for the consent of their legal representative. {'\n'}③
            Legal representatives such as parents of "users" under the age of 14
            may request access, correction, or update of personal information of
            children, or withdraw consent to membership registration. The
            Company shall take necessary measures without delay. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 9 (Change of member information) {'\n'}
            </Text>
            ① “Members” can view and modify their personal information at any
            time through the personal information management screen. {'\n'}② If
            the information entered at the time of application for membership is
            changed, the ``Member'' shall make corrections online or notify the
            ``Company'' of the changes by e-mail or other means. {'\n'}③ The
            “Company” shall not be held responsible for any disadvantages
            incurred by not notifying the “Company” of the changes in Clause 2.{' '}
            {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 10 (Obligation to manage "Member"'s "ID" and "Password")
              {'\n'}
            </Text>
            ① The responsibility for managing the member's ID and password lies
            with the member, and shall not be used by a third party. {'\n'}② If
            the “member” becomes aware that the “ID” and “password” have been
            stolen or used by a third party, the “member” shall immediately
            notify the “company” and follow the guidance of the “company”. must
            obey. {'\n'}③ In the case of paragraph 2, if the "member" does not
            notify the "company" of the fact, or even if it is notified, the
            "company" will not be responsible for any disadvantages caused by
            not following the instructions of the "company". I don't owe you.{' '}
            {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 11 (Notice to "Members"){'\n'}
            </Text>
            ① When the “Company” notifies the “Member”, it may use the e-mail
            address designated by the “Member”. {'\n'}② The “Company” can
            replace the notice in paragraph 1 by posting on the bulletin board
            of the “Company” for more than 7 days in the case of notification to
            all “Members”. However, for matters that have a significant impact
            on the transaction of the "member" himself/herself, we will notify
            you as set forth in paragraph 1. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 12 (Withdrawal from Membership and Loss of Qualification,
              etc.) {'\n'}
            </Text>
            ① The 'member' can request the 'company' to withdraw at any time,
            and the 'company' will process the withdrawal immediately. {'\n'}②
            If a “member” falls under any of the following items, the “company”
            may restrict or suspend membership. {'\n'}
            1. If false information is registered at the time of application for
            membership; {'\n'}
            2. In the event that the member fails to fulfill the obligations
            borne by the member in connection with the use of the "Company"
            service fee or other services of the "Company" by the due date.{' '}
            {'\n'}
            In the event of threatening the order of electronic commerce, such
            as interfering with the use of the company's services by others or
            stealing the information. {'\n'}
            4. When using the "Company" to perform acts that are prohibited by
            laws and regulations or are contrary to public order and morals.{' '}
            {'\n'}③ After the 'Company' restricts or suspends membership, if the
            same act is repeated twice or more or if the cause is not corrected
            within 30 days, the 'Company' may terminate the membership. {'\n'}④
            If the "Company" loses membership, it will cancel the membership
            registration. In this case, the “member” will be notified of this
            and will be given an opportunity to be called for a period of at
            least 30 days or more before canceling the membership registration.{' '}
            {'\n'}
            {'\n'}
            <Text style={styles.MainSubText}>
              Chapter 3 Content Usage Agreement{'\n'}
            </Text>
            {'\n'}
            <Text style={styles.subText}>
              Article 13 (Posting of Contents, etc.) {'\n'}
            </Text>
            ① The “Company” shall display the following matters in an
            easy-to-understand manner for the “User” on the initial screen for
            use of the applicable “Content” and its packaging. {'\n'}
            1. Name or Endorsement of Content{'\n'}
            2. Production and display date of "Content"{'\n'}
            3. The name of the "Content" producer (in the case of a corporation,
            the name of the corporation), address, and telephone number; {'\n'}
            4. Contents, method of use, usage fee and other conditions of use
            {'\n'}② The “Company” will provide the “User” with information on
            available devices for each “Content” and the minimum technical
            specifications required for use during the contract conclusion
            process. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 14 (Establishment of use contract, etc.)
            </Text>
            {'\n'}① The “User” shall apply for use through the following or
            similar procedures provided by the “Company”. The 'Company' shall
            provide information so that the 'User' can accurately understand
            each item before concluding a contract and conduct transactions
            without any mistakes or errors. {'\n'}
            1. Browsing and Selecting the Content List{'\n'}
            2. Input of name, address, phone number (or mobile phone number),
            e-mail address, etc. {'\n'}
            3. Confirmation of the contents of the terms and conditions and the
            measures taken by the "company" regarding the "contents" that cannot
            be withdrawn. {'\n'}
            4. Indication (e.g., mouse click) to agree to this agreement and
            confirm or reject the item 3 above{'\n'}
            5. Consent to Confirmation of Application for Use of "Content" or
            Confirmation of "Company"{'\n'}
            6. Choice of payment method{'\n'}② The “Company” may refuse to
            approve or withhold approval if the “User”’s application for use
            falls under any of the following items. {'\n'}
            1.If it is not your real name or if you use someone else's name
            {'\n'}
            2. If false information is entered or the content presented by the
            "Company" is not entered{'\n'}
            3. When minors attempt to use "contents" whose use is prohibited by
            the Youth Protection Act; {'\n'}
            4. In the event of lack of service-related facilities or technical
            or operational problems; {'\n'}③ The contract shall be deemed to
            have been concluded when the consent of the "Company" reaches the
            "User" in the form of a receipt confirmation notification in Article
            16, Paragraph 1. {'\n'}④ The “Company”’s declaration of intention to
            accept includes confirmation of the “User’s” application for use,
            whether or not the service can be provided, and information on
            correction/cancellation of the use application. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 15 (Special Provisions Concerning Contracts for Use by
              Minors) {'\n'}
            </Text>
            When a minor user under the age of 20 wants to use a paid service,
            the "Company" shall obtain the consent of a legal representative
            such as a relative or the legal representative of the minor user or
            the legal representative unless the consent is obtained after the
            contract is concluded. We will take measures to notify before the
            conclusion of the contract that the contract can be canceled. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 16 (Receipt Confirmation Notification/Change and
              Cancellation of Application for Use) {'\n'}
            </Text>
            ① The “Company” will notify the “User” of receipt confirmation when
            the “User” applies for use. {'\n'}② If there is a discrepancy in the
            expression of intention, etc., the "user" who has received the
            receipt confirmation notice may request to change or cancel the
            usage application immediately after receiving the receipt
            confirmation notice, and the "company" There is a "user" request
            before the service is provided. In some cases, it may be necessary
            to process the request without undue delay. However, if the payment
            has already been made, the provisions of Article 27 regarding
            withdrawal of subscription, etc. will be followed. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 17 (Obligations of the "Company"){'\n'}
            </Text>
            ① The “Company” shall act faithfully and faithfully in exercising
            its rights and fulfilling its obligations as stipulated by laws and
            regulations and these terms and conditions. {'\n'}② The 'Company'
            shall have a security system to protect personal information
            (including credit information) so that the 'User' can safely use the
            'Contents', and publicize the personal information protection
            policy. Comply. {'\n'}③ The “Company” will take measures so that the
            “User” can check the content usage and the payment details at any
            time. {'\n'}④ If the "Company" recognizes that the opinion or
            complaint raised by the "User" regarding the use of the contents is
            justified, it will be processed without delay. Regarding opinions
            and complaints raised by users, we will use the bulletin board or
            notify the process and results through e-mail. {'\n'}⑤ The “Company”
            will compensate the “User” for damages caused by the violation of
            the obligations stipulated in these Terms. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 18 (Obligations of "Users"){'\n'}
            </Text>
            ① “User” shall not do the following acts. {'\n'}
            1. Statement of false information at the time of application or
            change
            {'\n'}
            2. Stealing information from others{'\n'}
            3. CHANGES IN INFORMATION POSTED ON THE COMPANY{'\n'}
            4. Transmission or posting of information (computer programs, etc.)
            prohibited by the "Company"{'\n'}
            5. Infringement of intellectual property rights such as copyrights
            of the Company and other third parties{'\n'}
            6. Acts that damage the reputation of the "Company" or other third
            parties or interfere with their business{'\n'}
            7. Acts of publishing or posting obscene or violent words or
            sentences, burns, sounds, or other information contrary to public
            order and morals on the Company's website. {'\n'}
            8. Other illegal or unjust acts{'\n'}② The “user” shall comply with
            relevant laws and regulations, the provisions of this agreement,
            usage guidelines and public notices related to “contents”, matters
            notified by the “company”, etc., and other “company” You must not
            engage in any act that interferes with your work. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 19 (Payment Method) {'\n'}
            </Text>
            The method of payment for the use of "contents" can be made by any
            of the following methods. However, the "Company" does not collect
            any additional fee for the payment method of the "User".{'\n'}
            1. Various account transfers such as phone banking, internet
            banking, and mail banking{'\n'}
            2. Various card payments such as prepaid cards, debit cards, and
            credit cards{'\n'}
            3. Online bankbook deposit{'\n'}
            4. Payment by electronic money{'\n'}
            5. Settlement with points provided by the "Company" such as mileage
            {'\n'}
            6. Conclude a contract with the "Company" or settle with a gift
            certificate approved by the "Company"{'\n'}
            7. Payment by telephone or mobile phone{'\n'}
            8. Payment by other electronic payment methods, etc. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 20 (Provision and Suspension of Content Service) {'\n'}
            </Text>
            ① In principle, content services are provided 24 hours a day, 7 days
            a week. {'\n'}② The “Company” may temporarily suspend the provision
            of content services in the event of maintenance, inspection,
            replacement or failure of information communication equipment such
            as computers, communication interruptions, or due to operational
            reasons. In this case, the "Company" will notify the "User" in the
            manner stipulated in Article 11 [Notice to the "Member"]. However,
            if there is an unavoidable reason that the "Company" cannot notify
            in advance, it can be notified after the fact. {'\n'}③ The “Company”
            will compensate for the damages suffered by the “User” due to the
            temporary interruption of the content service provision without
            reasonable reason. However, this does not apply if the "Company"
            proves that there is no intention or negligence. {'\n'}④ The
            “Company” may conduct periodic inspections if necessary for the
            provision of content services, and the periodical inspection time
            will be announced on the service provision screen. {'\n'}⑤ In the
            event that content services cannot be provided due to reasons such
            as conversion of business items, abandonment of business,
            integration between providers, etc., the “Company” shall notify the
            “User ”. We will compensate the "user" according to the conditions
            initially presented by the "company". However, if the “Company” does
            not notify the compensation standards, etc., or if the announced
            compensation standards are not appropriate, the “User” mileage or
            reserves, etc. will be paid to the “User” in kind or in cash. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 21 (Changes to content services) {'\n'}
            </Text>
            ① The “Company” may change the content services provided according
            to operational and technical needs if there is a reasonable reason.{' '}
            {'\n'}② The "Company" will post on the initial screen of the content
            for at least 7 days before the change, the reason for the change,
            the content of the content service to be changed, the date of
            provision, etc. in the case of changing the content, usage method,
            and usage time of the content service. {'\n'}③ In the case of
            paragraph 2, if the changed content is serious or disadvantageous to
            the "user", the "company" will notify the "user" who receives the
            content service in accordance with Article 11 ["Membership "Notice
            to"] and receive consent. At this time, the "company" will provide
            the pre-change service to the "user" who refuses to agree. However,
            if it is not possible to provide such services, the contract may be
            terminated. {'\n'}④ The “Company” shall compensate for the damages
            suffered by the “User” due to the change of service under Clause 1
            and the cancellation of the contract under Clause 3. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 22 (Providing Information and Posting Advertisements){' '}
              {'\n'}
            </Text>
            ① The “Company” may provide the “Member” with various information
            deemed necessary by the “User” during the use of the content,
            through public notices, e-mails, etc. However, the "member" can
            refuse to receive it at any time by e-mail. {'\n'}
            ②In the event that the information in Clause 1 is to be sent by
            telephone or copy transmission equipment, it will be sent with the
            prior consent of the "member".{'\n'}③ The “Company” may post
            advertisements on the content screen, homepage, e-mail, etc. in
            connection with the provision of the “Content” service. "Members"
            who receive e-mails containing advertisements can set their
            reception refusal to "Company".{'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 23 (Deletion of posts) {'\n'}
            </Text>
            ① The “Company” will delete without delay any material harmful to
            juveniles that violates the Act on Promotion of Information and
            Communication Network Utilization and Information Protection, etc.
            is posted on the bulletin board. However, bulletin boards that can
            only be used by "users" aged 19 and over are an exception. {'\n'}② A
            person whose legal interests are infringed by information posted on
            bulletin boards, etc. operated by the "Company" may request the
            "Company" to delete such information or post anti-stay content. In
            this case, the "Company" will take necessary measures without delay
            and notify the applicant immediately. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 24 (Ownership of copyright, etc.) {'\n'}
            </Text>
            ①Copyrights and other intellectual property rights for works created
            by the “Company” belong to the “Company”. {'\n'}② Among the services
            provided by the "Company", the copyrights and other intellectual
            property rights for the works provided under the partnership
            agreement belong to the provider. {'\n'}③ The “User” shall not,
            among the information obtained by using the services provided by the
            “Company”, dispose of information whose intellectual property rights
            belong to the “Company” or providers without the prior consent of
            the “Company” or providers. You may not copy, transfer, publish,
            distribute, broadcast, or otherwise use for commercial purposes, or
            allow third parties to use. {'\n'}④ The "Company" shall obtain
            permission from the "User" when using the "User's" copyrighted work
            according to the contract. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 25 (Personal Information Protection) {'\n'}
            </Text>
            ① The “Company” may collect the minimum information necessary for
            the “User” to use the content, in addition to the items stated in
            the application form in Article 7, Paragraph 2. For this reason, the
            "user" must sincerely inform the truth about the matters inquired by
            the "company".{'\n'}② When the “Company” collects “personal
            information” that can identify the “user”, the consent of the “user”
            will be obtained. {'\n'}③ The "Company" cannot use the information
            provided by the "User" in the application for use, etc. and the
            information collected pursuant to Paragraph 1 for any other purpose
            without the consent of the "User" or provide it to a third party.
            All responsibility lies with the "company". However, with the
            exception of the following cases. {'\n'}
            1. When providing in a form that cannot identify a specific
            individual as it is necessary for statistical preparation, academic
            research, or market research{'\n'}
            2. In case it is necessary for the settlement of charges for the
            provision of "contents"{'\n'}
            3. In case it is necessary for identification to prevent theft{'\n'}
            4. In case there is an unavoidable reason required by the provisions
            of the Terms and Conditions or laws and regulations{'\n'}④ If the
            “company” must obtain the consent of the “user” according to
            paragraphs 2 and 3, the identity (affiliation, name, telephone
            number and other contact information) and information of the person
            responsible for managing “personal information” Purpose of
            collection and purpose of use Regarding matters related to
            information provision to third parties (person provided, purpose of
            provision and content of information to be provided) Matters to be
            stipulated must be specified and announced. To do. {'\n'}⑤ The
            “user” can voluntarily withdraw the consent of paragraph 3 at any
            time. {'\n'}⑥ The “user” can request to view and correct errors in
            his “personal information” held by the “company” at any time, and
            the “company” will take necessary measures without delay. be obliged
            to take If the "user" requests correction of the error, the
            "company" will not use the "personal information" until the error is
            corrected. {'\n'}⑦ The “Company” limits the number of administrators
            for the protection of personal information and minimizes the number
            of administrators. Responsible for damages of "user".{'\n'}⑧ The
            “Company” or a person who has been provided with “Personal
            Information” from it can use “Personal Information” within the scope
            agreed by the “User”, and if the purpose is achieved, the
            “Individual information” without delay. {'\n'}⑨ The "Company" will
            make efforts to protect the "Personal Information" of the "User" in
            accordance with relevant laws and regulations such as the Act on
            Promotion of Information and Communication Network Utilization and
            Information Protection. Regarding the protection and use of
            "personal information", the relevant laws and regulations and the
            privacy policy of the "Company" apply. {'\n'}
            {'\n'}
            <Text style={styles.MainSubText}>
              Chapter 4 Withdrawal of Contract for {'\n'}
            </Text>
            Content Usage, Termination/Cancellation of Contract, and
            Restrictions on Use{'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 26 (Withdrawal of subscription and
              cancellation/termination of contract by "user"){'\n'}
            </Text>
            ① A “user” who has concluded a contract with the “company” regarding
            the use of “contents” may withdraw the application within 7 days
            from the date of receiving the receipt confirmation notification.
            However, if the "Company" takes one of the following measures, the
            "User"s right to withdraw the subscription may be restricted. {'\n'}
            1. In the case where the fact about the 'content' that cannot be
            withdrawn is included in the items to be displayed; {'\n'}
            2. If you provide a trial product{'\n'}
            3. When providing a method such as temporary or partial use{'\n'}②
            If there are any of the following reasons, the "user" shall, within
            three months from the date of receipt of the supply of the "content"
            or within 30 days from the day when the fact was not known or became
            known, You can cancel or cancel the usage contract. {'\n'}
            1. If the "contents" stipulated in the usage contract are not
            provided
            {'\n'}
            2. If the "content" provided is different from the display,
            advertisement, etc., or if there is a significant difference{'\n'}
            3. When normal use is extremely impossible due to defects in other
            "contents"{'\n'}③ Withdrawal of the subscription in Clause 1 and
            cancellation/cancellation of the contract in Clause 2 shall take
            effect when the "user" expresses his or her intention to the
            "company" by telephone, e-mail or transmission of a copy. {'\n'}④
            The “Company” shall reply to the “User” without delay after
            receiving the intention to withdraw from the contract or cancel or
            terminate the contract indicated by the “User” in accordance with
            Clause 3. {'\n'}⑤ The "user" can request a complete "contents" or
            repair of defects in the use of the service within a reasonable
            period of time before expressing the intention to cancel or cancel
            the contract due to the reasons in paragraph 2. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 27 (Withdrawal of Subscription by "User" and Effect of
              Contract Cancellation/Cancellation) {'\n'}
            </Text>
            ① The “Company” shall settle the payment within 3 business days from
            the date the “User” expresses his intention to withdraw from the
            contract or from the date he replies to the “User” to express his
            intention to cancel or terminate the contract. This must be refunded
            in the same manner as the In this case, if the "Company" delays the
            refund to the "User", it will pay the delayed interest calculated by
            multiplying the delayed period by the delayed interest determined
            and announced by the Fair Trade Commission. {'\n'}② When the
            'Company' refunds according to paragraph 1, the 'user' may deduct
            the amount corresponding to the profit obtained from the use of the
            service. {'\n'}③ When refunding the above-mentioned price, if the
            “user” paid the price for the goods, etc. with a payment method such
            as a credit card or electronic money, the “company” shall, without
            delay Request to stop or cancel the billing of the price of etc.
            However, this may not be the case if the amount deducted in
            Paragraph 2 is required. {'\n'}④ If the “company”, the “person paid
            for the contents” or the “person who concluded the content usage
            contract with the user” are not the same person, each person shall
            withdraw the contract or cancel the contract. We are jointly and
            severally liable for the performance of our obligations. {'\n'}⑤ The
            "Company" will not demand a penalty or compensation for damages from
            the "User" on the grounds of withdrawal of subscription. However,
            this does not affect the user's claim for damages due to
            cancellation or cancellation of the contract. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 28 (Company Contract Cancellation/Termination and Use
              Restrictions) {'\n'}
            </Text>
            ① The “Company” may cancel or cancel the contract without prior
            notice, or limit the use of the service for a specified period if
            the “User” commits an act specified in Article 12, Paragraph 2.{' '}
            {'\n'}
            (2) The cancellation or termination of paragraph 1 shall take effect
            when the "company" indicates its intention to the "user" by the
            notification method specified by itself. {'\n'}③ Regarding
            cancellation, cancellation and usage restrictions of the “Company”,
            the “User” can file an objection in accordance with the procedures
            specified by the “Company”. At this time, if the "Company"
            recognizes that the objection is justified, the "Company" will
            immediately resume using the service. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 29 (Effects of contract cancellation/termination by the
              company) {'\n'}
            </Text>
            Article 27 shall apply mutatis mutandis to the effect of
            cancellation or cancellation of the use contract due to reasons
            attributable to the "user". However, the "Company" will refund the
            payment by the same method as the payment within 7 business days
            from the date of the intention to cancel or terminate the contract
            to the "User".{'\n'}
            {'\n'}
            <Text style={styles.MainSubText}>
              Chapter 5 Mistakes, Damage Compensation, etc. {'\n'}
            </Text>
            {'\n'}
            <Text style={styles.subText}>Article 30 (Errors) {'\n'}</Text>① In
            the event of an error charge, the "Company" must refund the full
            amount of the error charge in the same manner as the payment for the
            usage fee. However, if refunds cannot be made in the same way, we
            will notify you in advance. {'\n'}② In the event that the
            malpractice fee is incurred due to reasons that the 'Company' is
            responsible for, the 'Company' will refund the full amount of the
            malpractice fee regardless of contract costs, fees, etc. However, if
            the malpractice fee is incurred due to reasons for which the
            ``User'' is responsible, the ``User'' must bear the costs incurred
            by the ``Company'' to refund the malpractice fee within a reasonable
            range. Hmm. {'\n'}③ The Company shall bear the responsibility of
            proving that the usage fee was properly charged in the event that
            the Company refuses to refund the misdemeanor charge claimed by the
            "User". ④ The 'Company' will process the refund procedure for the
            malpractice in accordance with the Digital Contents User Protection
            Guidelines. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 31 (Compensation for User Damage due to Content Defects,
              etc.) {'\n'}
            </Text>
            The "Company" will handle matters related to the standards, scope,
            methods and procedures for user damage compensation due to content
            defects, etc., in accordance with the Digital Content User
            Protection Guidelines. {'\n'}
            {'\n'}
            <Text style={styles.subText}>Article 32 (Disclaimer) {'\n'}</Text>①
            The “Company” shall be exempted from responsibility for providing
            “Contents” if it is unable to provide “Contents” due to natural
            disasters or similar force majeure. {'\n'}② The “Company” shall not
            be held responsible for any failures in the use of content due to
            reasons attributable to the “User”. {'\n'}③ The 'Company' shall not
            be held responsible for the information, materials, reliability,
            accuracy, etc. of facts posted by the 'Member' in relation to the
            'Content'. {'\n'}④ The “Company” shall not be held responsible for
            any disputes arising between “Users” or between “Users” and third
            parties through “Contents”. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 33 (Dispute Resolution) {'\n'}
            </Text>
            In the event of a dispute, the "Company" will reflect the legitimate
            opinions and dissatisfaction raised by the "User" and take
            appropriate and prompt measures. However, if prompt processing is
            difficult, the “Company” will notify the “User” of the reason and
            processing schedule. {'\n'}
          </Text>
          <View style={{ height: toSize(50) }}></View>
        </ScrollView>
      </View>
    </View>
  );
}
