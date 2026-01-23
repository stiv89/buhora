import { Language } from './types';

export interface LegalSection {
  title: string;
  content: string;
}

export interface LegalContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalContentData {
  es: LegalContent;
  en: LegalContent;
}

export const termsContent: LegalContentData = {
  es: {
    title: 'Términos y Condiciones',
    lastUpdated: 'Última actualización:',
    sections: [
      {
        title: '1. Aceptación de los Términos',
        content: 'Al acceder y utilizar los servicios de BUHORA, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.',
      },
      {
        title: '2. Servicios',
        content: 'BUHORA proporciona servicios de análisis de datos y soporte analítico para organizaciones. Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto de nuestros servicios en cualquier momento.',
      },
      {
        title: '3. Uso Aceptable',
        content: 'Usted se compromete a utilizar nuestros servicios únicamente para fines legales y de acuerdo con estos términos. No debe utilizar nuestros servicios de manera que pueda dañar, deshabilitar o sobrecargar nuestros sistemas.',
      },
      {
        title: '4. Propiedad Intelectual',
        content: 'Todo el contenido, incluyendo pero no limitado a textos, gráficos, logos y software, es propiedad de BUHORA y está protegido por las leyes de propiedad intelectual.',
      },
      {
        title: '5. Limitación de Responsabilidad',
        content: 'BUHORA no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte del uso o la imposibilidad de usar nuestros servicios.',
      },
      {
        title: '6. Modificaciones',
        content: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web.',
      },
      {
        title: '7. Contacto',
        content: 'Para cualquier pregunta sobre estos términos y condiciones, puede contactarnos a través de nuestro correo electrónico o LinkedIn.',
      },
    ],
  },
  en: {
    title: 'Terms and Conditions',
    lastUpdated: 'Last updated:',
    sections: [
      {
        title: '1. Acceptance of Terms',
        content: 'By accessing and using BUHORA services, you agree to comply with these terms and conditions. If you do not agree with any part of these terms, you should not use our services.',
      },
      {
        title: '2. Services',
        content: 'BUHORA provides data analytics and analytical support services for organizations. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.',
      },
      {
        title: '3. Acceptable Use',
        content: 'You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services in any way that may damage, disable, or overload our systems.',
      },
      {
        title: '4. Intellectual Property',
        content: 'All content, including but not limited to texts, graphics, logos, and software, is the property of BUHORA and is protected by intellectual property laws.',
      },
      {
        title: '5. Limitation of Liability',
        content: 'BUHORA shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.',
      },
      {
        title: '6. Modifications',
        content: 'We reserve the right to modify these terms at any time. Modifications will take effect immediately after their publication on this website.',
      },
      {
        title: '7. Contact',
        content: 'For any questions about these terms and conditions, you can contact us through our email or LinkedIn.',
      },
    ],
  },
};

export const privacyContent: LegalContentData = {
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización:',
    sections: [
      {
        title: '1. Información que Recopilamos',
        content: 'BUHORA puede recopilar información personal cuando usted se comunica con nosotros o utiliza nuestros servicios. Esta información puede incluir nombre, dirección de correo electrónico, información de contacto y cualquier otra información que usted nos proporcione voluntariamente.',
      },
      {
        title: '2. Uso de la Información',
        content: 'Utilizamos la información recopilada para proporcionar, mantener y mejorar nuestros servicios, comunicarnos con usted, y cumplir con nuestras obligaciones legales. No vendemos ni compartimos su información personal con terceros para fines comerciales.',
      },
      {
        title: '3. Protección de Datos',
        content: 'Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.',
      },
      {
        title: '4. Cookies y Tecnologías Similares',
        content: 'Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.',
      },
      {
        title: '5. Sus Derechos',
        content: 'Usted tiene derecho a acceder, rectificar, eliminar o limitar el procesamiento de su información personal. También tiene derecho a oponerse al procesamiento y a la portabilidad de sus datos.',
      },
      {
        title: '6. Retención de Datos',
        content: 'Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.',
      },
      {
        title: '7. Cambios a esta Política',
        content: 'Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos sobre cambios significativos publicando la nueva política en esta página.',
      },
      {
        title: '8. Contacto',
        content: 'Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos su información personal, puede contactarnos a través de nuestro correo electrónico o LinkedIn.',
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated:',
    sections: [
      {
        title: '1. Information We Collect',
        content: 'BUHORA may collect personal information when you communicate with us or use our services. This information may include name, email address, contact information, and any other information you voluntarily provide to us.',
      },
      {
        title: '2. Use of Information',
        content: 'We use the collected information to provide, maintain, and improve our services, communicate with you, and fulfill our legal obligations. We do not sell or share your personal information with third parties for commercial purposes.',
      },
      {
        title: '3. Data Protection',
        content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        title: '4. Cookies and Similar Technologies',
        content: 'Our website may use cookies and similar technologies to enhance your experience. You can configure your browser to reject cookies, although this may affect the functionality of the site.',
      },
      {
        title: '5. Your Rights',
        content: 'You have the right to access, rectify, delete, or limit the processing of your personal information. You also have the right to object to processing and to data portability.',
      },
      {
        title: '6. Data Retention',
        content: 'We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, unless the law requires or permits a longer retention period.',
      },
      {
        title: '7. Changes to this Policy',
        content: 'We reserve the right to update this privacy policy at any time. We will notify you of significant changes by posting the new policy on this page.',
      },
      {
        title: '8. Contact',
        content: 'If you have questions about this privacy policy or how we handle your personal information, you can contact us through our email or LinkedIn.',
      },
    ],
  },
};
