import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../styles';
import { toSize } from '../../../../globalStyle';
import Header from '../../../../components/MyHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default function CreateAccountScreen() {
  return (
    <View style={styles.fullscreen}>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}>
        <Text style={styles.MainText}>
          Personal information{'\n'}processing policy
        </Text>
        <View style={styles.borderline}></View>
        <ScrollView>
          <Text style={styles.normalText}>
            In accordance with Article 30 of the Personal Information Protection
            Act, {'<Re-Kor>'} has established the following personal information
            processing policy in order to protect the personal information of
            the information subject and to promptly and smoothly handle
            complaints regarding this. is established and published. {'\n'}
            This privacy policy applies from September 8, 2022. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 1 (Purpose of processing personal information) {'\n'}
            </Text>
            {'<Re-Kor>'} processes personal information for the following
            purposes: The personal information being processed will not be used
            for purposes other than the following purposes, and if the purpose
            of use is changed, we will take necessary measures such as obtaining
            separate consent pursuant to Article 18 of the Personal Information
            Protection Act. It's a schedule. {'\n'}
            1. Website member registration and management{'\n'}
            We process personal information for the purpose of identifying and
            authenticating individuals by providing membership services. {'\n'}
            2. Provision of goods or services{'\n'}
            We process personal information for the purposes of providing
            content and custom services. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 2 (Personal Information Processing and Retention Period){' '}
            </Text>
            {'\n'}① {'<Re-Kor>'} will process and retain personal information
            within the period of retention and use of personal information
            stipulated by law or within the period of retention and use of
            personal information agreed upon by the information subject at the
            time of collection of personal information. {'\n'}② Each personal
            information processing and retention period is as follows. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 3 (items of personal information to be processed) {'\n'}
            </Text>
            ①{'<Re-Kor>'} processes the following personal information items.{' '}
            {'\n'}
            {'<Website member registration and management>'}
            {'\n'}
            Mandatory items: mobile phone number, password, date of birth{'\n'}
            Selectable items: Nationality, Gender{'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 4 (Personal Information Destruction Procedure and
              Destruction Method) {'\n'}
            </Text>
            ① {'<Re-Kor>'} will destroy the personal information without delay
            when the personal information is no longer needed due to the
            expiration of the personal information retention period or the
            achievement of the purpose of processing. {'\n'}② The procedures and
            methods for destroying personal information are as follows. {'\n'}
            1. Destruction procedure{'\n'}
            {'<Re-Kor>'} selects personal information for which a reason for
            destruction has occurred, and destroys the personal information with
            the approval of the person in charge of personal information
            protection of {'<Re-Kor>'}.{'\n'}
            {'\n'}
            2. Destruction method{'\n'}
            Information in electronic file format uses technical methods that
            make it impossible to reproduce the recording. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 5 (Rights and Obligations of Information Subjects and
              Legal Representatives, and Matters Concerning How to Exercise
              Them)
            </Text>
            ① The information subject can exercise the right to view, correct,
            delete, and stop processing personal information at any time with
            respect to Re-Kor. {'\n'}② The exercise of rights under paragraph 1
            can be made to Re-Kor in writing, e-mail, copy transmission (FAX),
            etc. pursuant to Article 41, paragraph 1 of the Enforcement Order of
            the "Personal Information Protection Act". We will take action
            against this without delay. {'\n'}③ The exercise of rights under
            paragraph 1 can be done through a legal representative of the
            information subject or a representative such as a person who has
            been entrusted. In this case, it is necessary to submit a power of
            attorney in accordance with Form 11 attached to the "Notice on
            Personal Information Processing Methods (No. 2020-7)". {'\n'}
            ④Personal information viewing and processing suspension requests may
            be subject to restrictions on the rights of the information subject
            according to Article 35, Paragraph 4 and Article 37, Paragraph 2 of
            the Personal Information Protection Act. {'\n'}⑤ Requests for
            correction and deletion of personal information cannot be requested
            if the personal information is specified as the object of collection
            by other laws and regulations. {'\n'}⑥ Re-Kor confirms whether the
            person who requested access, correction, deletion, or suspension of
            processing based on the rights of the information subject is the
            principal or a legitimate agent. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 6 (Matters Concerning Security Measures for Personal
              Information) {'\n'}
            </Text>
            {'<Re-Kor>'} takes the following measures to ensure the safety of
            personal information. {'\n'}
            1. Technical measures against hacking, etc. {'\n'}
            {'<Re-Kor>'}installs a security program to prevent personal
            information from being leaked or damaged due to hacking or computer
            viruses, performs regular updates and checks, and controls external
            access. Systems are installed in areas that have been
            technically/physically monitored and blocked. {'\n'}
            2. Encryption of personal information{'\n'}
            The user's personal information is stored and managed with encrypted
            passwords, which can only be known by the person himself/herself. I
            am using the function. {'\n'}
            3. Restricted access to personal information{'\n'}
            We take necessary measures to control access to personal information
            by granting, changing, and deleting access rights to the database
            system that processes personal information, and control unauthorized
            access from the outside by using an intrusion blocking system.
            increase. {'\n'}
            {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 7 (Installation, operation and refusal of devices that
              automatically collect personal information) {'\n'}
            </Text>
            Re-Kor does not use "cookies" that store and retrieve usage
            information of information subjects from time to time. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 8 (Matters Concerning Persons in Charge of Personal
              Information Protection) {'\n'}
            </Text>
            ① Re-Kor takes overall responsibility for the work related to
            personal information processing, and designates a person in charge
            of personal information protection as follows to handle complaints
            and remedy damages of information subjects regarding personal
            information processing. {'\n'}
            ▶person in charge of personal information protection{'\n'}
            Name: Kim Chaehyun{'\n'}
            Contact: 01030601750{'\n'}
            *This will connect you to the department in charge of personal
            information protection. {'\n'}
            ②Information subjects should contact the person in charge of
            personal information protection and the department in charge for all
            inquiries regarding personal information protection, complaint
            handling, damage relief, etc. that occurred while using Re-Kor's
            services (or business). increase. Re-Kor will respond to and process
            inquiries from information subjects without delay. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 9 (Department that accepts and processes personal
              information viewing requests) {'\n'}
            </Text>
            The subject of information may request access to personal
            information pursuant to Article 35 of the "Personal Information
            Protection Act" to the following departments. {'<Re-Kor>'} will
            endeavor to promptly process the information subject's personal
            information viewing request. {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 10 (Method of Remedy for Infringement of Rights of
              Information Subject) {'\n'}
            </Text>
            In order to receive relief from personal information infringement,
            the information subject may apply for dispute resolution or
            consultation with the Personal Information Dispute Mediation
            Committee, Korea Internet & Security Agency Personal Information
            Infringement Report Center, etc. In addition to this, please contact
            the following organizations for other personal information
            infringement reports and consultations. {'\n'}
            1. Personal Information Dispute Adjustment Committee: (No area code)
            1833-6972 (www.kopico.go.kr) {'\n'}
            2. Personal Information Infringement Report Center : (no area code)
            118 (privacy.kisa.or.kr) {'\n'}
            3. Supreme Public Prosecutor's Office: (no area code) 1301
            (www.spo.go.kr) {'\n'}
            4. National Police Agency: (no area code) 182 (ecrm.cyber.go.kr){' '}
            {'\n'}
            {'\n'}
            Personal Information Protection Act Article 35 (access to personal
            information), Article 36 (correction/deletion of personal
            information), Article 37 (suspension of personal information
            processing, etc.) A person whose rights or interests have been
            infringed by disposition or omission may request an administrative
            trial as stipulated by the Administrative Trial Act. {'\n'}
            *For more information on administrative hearings, please visit the
            website of the Central Administrative Trial Commission
            (www.simpan.go.kr). {'\n'}
            {'\n'}
            <Text style={styles.subText}>
              Article 11 (Change of personal information processing policy){' '}
              {'\n'}
            </Text>
            ① This personal information processing policy will be applied from
            September 8, 2022. {'\n'}- 2022. 9. 8 ~ apply
          </Text>
          <View style={{ height: toSize(50) }}></View>
        </ScrollView>
      </View>
    </View>
  );
}
