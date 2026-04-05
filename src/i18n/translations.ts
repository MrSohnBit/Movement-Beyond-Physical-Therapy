export type Language = 'en' | 'ko' | 'ja' | 'es';

export const translations = {
  en: {
    nav: {
      services: 'Services',
      locations: 'Locations',
      about: 'About',
      contact: 'Contact',
      book: 'Book Appointment',
    },
    hero: {
      badge: 'Advanced Physical Therapy & Acupuncture',
      title: 'Precision Recovery for Your Active Life',
      description: 'We combine clinical excellence with personalized care to help you move beyond pain and reach your peak performance.',
      cta: 'Start Your Recovery',
      secondaryCta: 'Our Services',
    },
    services: {
      title: 'Our Services',
      pt: {
        title: 'Physical Therapy',
        subtitle: 'Movement & Restoration',
        description: 'Our doctors of physical therapy analyze your movement patterns to restore function, decrease pain, and prevent future injury through manual therapy and corrective exercise.',
        features: ['Mobility', 'Recovery', 'Prevention'],
      },
      acu: {
        title: 'Acupuncture',
        subtitle: 'Traditional Precision',
        description: 'Integrating Traditional Chinese Medicine with clinical precision to modulate the nervous system, reduce inflammation, and accelerate the body\'s natural healing response.',
        features: ['Pain Relief', 'Stress', 'Balance'],
      },
    },
    locations: {
      title: 'Our Location',
      clinicTitle: 'Visit Our Annandale Clinic',
      address: 'Address',
      contact: 'Contact',
      hours: 'Hours',
      lunch: 'Lunch',
      closed: 'Closed',
      directions: 'Get Directions on Google Maps',
      note: 'Sunday (Easter) Closed. Hours may vary.',
    },
    about: {
      title: 'About Us',
      heading: 'Pioneering the Future of Restorative Care',
      p1: 'At Movement Beyond, we believe that true healing happens at the intersection of clinical expertise and patient empowerment. Founded in Annandale, VA, our clinic was born from a vision to provide more than just symptom relief.',
      p2: 'Our multidisciplinary team of doctors and specialists works collaboratively to design precision recovery paths that address the root causes of dysfunction. Whether you are recovering from surgery, managing chronic pain, or seeking to optimize your athletic performance, we are here to guide you every step of the way.',
    },
    contact: {
      title: 'Contact Us',
      heading: 'Start Your Recovery Journey',
      description: 'Have questions about our services or want to schedule a consultation? Fill out the form, and our clinical team will get back to you within 24 hours.',
      directLine: 'Direct Line',
      emailSupport: 'Email Support',
      form: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        service: 'Service Interested In',
        message: 'Message',
        placeholder: {
          firstName: 'Jane',
          lastName: 'Doe',
          email: 'jane@example.com',
          message: 'How can we help you?',
        },
        submit: 'Send Message',
      },
    },
    footer: {
      description: 'Movement Beyond Physical Therapy & Acupuncture. Precision recovery for your active life.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },
    philosophy: {
      title: 'Our Approach',
      heading: 'A Philosophy of Care',
      items: [
        {
          id: '01',
          title: 'Evidence-Based Care',
          description: 'Every treatment plan is built on peer-reviewed clinical research and objective physiological markers.'
        },
        {
          id: '02',
          title: 'Patient-Centric Autonomy',
          description: 'We empower you with the tools and education needed to manage your health beyond the clinic walls.'
        },
        {
          id: '03',
          title: 'Holistic Precision',
          description: "We don't just treat symptoms; we identify and correct the underlying kinetic chains causing dysfunction."
        }
      ]
    }
  },
  ko: {
    nav: {
      services: '서비스',
      locations: '위치',
      about: '소개',
      contact: '문의',
      book: '예약하기',
    },
    hero: {
      badge: '전문 물리치료 및 침술 서비스',
      title: '활기찬 삶을 위한 정밀 회복 솔루션',
      description: '임상적 우수성과 맞춤형 케어를 결합하여 통증을 넘어 최고의 퍼포먼스에 도달할 수 있도록 도와드립니다.',
      cta: '회복 시작하기',
      secondaryCta: '서비스 보기',
    },
    services: {
      title: '제공 서비스',
      pt: {
        title: '물리치료',
        subtitle: '움직임 및 기능 회복',
        description: '물리치료 전문의가 귀하의 움직임 패턴을 분석하여 도수 치료와 교정 운동을 통해 기능을 회복하고 통증을 완화하며 부상을 예방합니다.',
        features: ['가동성 향상', '빠른 회복', '부상 예방'],
      },
      acu: {
        title: '침술 치료',
        subtitle: '전통과 정밀함의 조화',
        description: '전통 한의학과 임상적 정밀함을 통합하여 신경계를 조절하고 염증을 줄이며 신체의 자연 치유 반응을 촉진합니다.',
        features: ['통증 완화', '스트레스 관리', '신체 균형'],
      },
    },
    locations: {
      title: '병원 위치',
      clinicTitle: '애난데일 클리닉 방문하기',
      address: '주소',
      contact: '연락처',
      hours: '영업시간',
      lunch: '점심시간',
      closed: '휴무',
      directions: '구글 지도에서 길 찾기',
      note: '일요일(부활절) 휴무. 영업시간은 변동될 수 있습니다.',
    },
    about: {
      title: '병원 소개',
      heading: '회복 케어의 미래를 선도합니다',
      p1: 'Movement Beyond는 진정한 치유가 임상적 전문 지식과 환자의 의지가 만나는 지점에서 일어난다고 믿습니다. 버지니아주 애난데일에 설립된 저희 클리닉은 단순한 증상 완화 이상의 가치를 제공하려는 비전에서 시작되었습니다.',
      p2: '저희의 다학제적 전문 의료진은 협력하여 기능 장애의 근본 원인을 해결하는 정밀 회복 경로를 설계합니다. 수술 후 회복, 만성 통증 관리, 운동 성능 최적화 등 어떤 목적이든 저희가 모든 단계를 안내해 드립니다.',
    },
    contact: {
      title: '문의하기',
      heading: '회복 여정을 시작하세요',
      description: '서비스에 대해 궁금한 점이 있거나 상담을 원하시나요? 양식을 작성해 주시면 24시간 이내에 의료팀에서 연락드리겠습니다.',
      directLine: '직통 전화',
      emailSupport: '이메일 지원',
      form: {
        firstName: '이름',
        lastName: '성',
        email: '이메일 주소',
        service: '관심 서비스',
        message: '메시지',
        placeholder: {
          firstName: '길동',
          lastName: '홍',
          email: 'hong@example.com',
          message: '무엇을 도와드릴까요?',
        },
        submit: '메시지 보내기',
      },
    },
    footer: {
      description: 'Movement Beyond 물리치료 및 침술. 활기찬 삶을 위한 정밀 회복 솔루션.',
      quickLinks: '빠른 링크',
      legal: '법적 고지',
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      rights: '모든 권리 보유.',
    },
    philosophy: {
      title: '우리의 접근 방식',
      heading: '치유의 철학',
      items: [
        {
          id: '01',
          title: '근거 중심 케어',
          description: '모든 치료 계획은 동료 검토를 거친 임상 연구와 객관적인 생리학적 지표를 바탕으로 수립됩니다.'
        },
        {
          id: '02',
          title: '환자 중심의 자율성',
          description: '클리닉 밖에서도 스스로 건강을 관리할 수 있도록 필요한 도구와 교육을 제공하여 환자에게 힘을 실어줍니다.'
        },
        {
          id: '03',
          title: '전인적 정밀함',
          description: '단순히 증상만을 치료하지 않습니다. 기능 장애를 일으키는 근본적인 운동 사슬을 찾아내고 교정합니다.'
        }
      ]
    }
  },
  ja: {
    nav: {
      services: 'サービス',
      locations: 'アクセス',
      about: '当院について',
      contact: 'お問い合わせ',
      book: '予約する',
    },
    hero: {
      badge: '高度な理学療法と鍼治療',
      title: 'アクティブな生活のための精密な回復',
      description: '臨床的な卓越性とパーソナライズされたケアを組み合わせ、痛みを越えて最高のパフォーマンスに到達できるようサポートします。',
      cta: '回復を始める',
      secondaryCta: 'サービス内容',
    },
    services: {
      title: 'サービス内容',
      pt: {
        title: '理学療法',
        subtitle: '動きと機能の回復',
        description: '理学療法の専門医가あなたの動きのパターンを分析し、徒手療法と矯正エクササイズを通じて機能を回復させ、痛みを軽減し、将来の怪我を予防します。',
        features: ['可動性向上', '回復促進', '怪我予防'],
      },
      acu: {
        title: '鍼治療',
        subtitle: '伝統と精密さ',
        description: '伝統的な東洋医学と臨床的な精密さを統合し、神経系を調節して炎症を抑え、身体の自然な治癒反応を加速させます。',
        features: ['痛み緩和', 'ストレス管理', 'バランス調整'],
      },
    },
    locations: {
      title: 'アクセス',
      clinicTitle: 'アナンデール・クリニック',
      address: '住所',
      contact: '連絡先',
      hours: '診療時間',
      lunch: '昼休み',
      closed: '休診',
      directions: 'Googleマップで見る',
      note: '日曜日（イースター）は休診です。時間は変更になる場合があります。',
    },
    about: {
      title: '当院について',
      heading: '回復ケアの未来を切り拓く',
      p1: 'Movement Beyondでは、真の癒しは臨床的な専門知識と患者様のエンパワーメントが交差する場所で起こると信じています。バージニア州アナンデールで設立された当院は、単なる症状の緩和以上のものを提供したいというビジョンから誕生しました。',
      p2: '当院の多角的な専門チームは、機能不全の根本原因に対処する精密な回復パスを設計するために協力しています。手術後の回復、慢性的な痛みの管理、スポーツパフォーマンスの最適化など、あらゆる段階でサポートいたします。',
    },
    contact: {
      title: 'お問い合わせ',
      heading: '回復への第一歩',
      description: 'サービスに関するご質問やカウンセリングのご予約は、以下のフォームにご記入ください。24時間以内に担当チームよりご連絡いたします。',
      directLine: '直通電話',
      emailSupport: 'メールサポート',
      form: {
        firstName: '名',
        lastName: '姓',
        email: 'メールアドレス',
        service: 'ご希望のサービス',
        message: 'メッセージ',
        placeholder: {
          firstName: '太郎',
          lastName: '山田',
          email: 'taro@example.com',
          message: 'どのようなご相談でしょうか？',
        },
        submit: 'メッセージを送信',
      },
    },
    footer: {
      description: 'Movement Beyond 理学療法＆鍼治療。アクティブな生活のための精密な回復。',
      quickLinks: 'クイックリンク',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      rights: '全著作権所有。',
    },
    philosophy: {
      title: 'アプローチ',
      heading: 'ケアの哲学',
      items: [
        {
          id: '01',
          title: 'エビデンスに基づくケア',
          description: 'すべての治療計画は、査読済みの臨床研究と客観的な生理学的指標に基づいて作成されます。'
        },
        {
          id: '02',
          title: '患者中心の自律性',
          description: 'クリニックの外でも健康を管理できるよう、必要なツールと教育を提供し、患者様の自立を支援します。'
        },
        {
          id: '03',
          title: 'ホリスティックな精密さ',
          description: '単に症状を治療するのではなく、機能不全を引き起こしている根本的な運動連鎖を特定し、修正します。'
        }
      ]
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      locations: 'Ubicaciones',
      about: 'Nosotros',
      contact: 'Contacto',
      book: 'Reservar Cita',
    },
    hero: {
      badge: 'Fisioterapia Avanzada y Acupuntura',
      title: 'Recuperación de Precisión para su Vida Activa',
      description: 'Combinamos la excelencia clínica con una atención personalizada para ayudarle a superar el dolor y alcanzar su máximo rendimiento.',
      cta: 'Iniciar Recuperación',
      secondaryCta: 'Ver Servicios',
    },
    services: {
      title: 'Nuestros Servicios',
      pt: {
        title: 'Fisioterapia',
        subtitle: 'Movimiento y Restauración',
        description: 'Nuestros doctores en fisioterapia analizan sus patrones de movimiento para restaurar la función, disminuir el dolor y prevenir futuras lesiones mediante terapia manual y ejercicios correctivos.',
        features: ['Movilidad', 'Recuperación', 'Prevención'],
      },
      acu: {
        title: 'Acupuntura',
        subtitle: 'Precisión Tradicional',
        description: 'Integrando la Medicina Tradicional China con precisión clínica para modular el sistema nervioso, reducir la inflamación y acelerar la respuesta curativa natural del cuerpo.',
        features: ['Alivio del Dolor', 'Estrés', 'Equilibrio'],
      },
    },
    locations: {
      title: 'Nuestra Ubicación',
      clinicTitle: 'Visite Nuestra Clínica en Annandale',
      address: 'Dirección',
      contact: 'Contacto',
      hours: 'Horario',
      lunch: 'Almuerzo',
      closed: 'Cerrado',
      directions: 'Obtener Direcciones en Google Maps',
      note: 'Domingo (Pascua) Cerrado. Los horarios pueden variar.',
    },
    about: {
      title: 'Sobre Nosotros',
      heading: 'Liderando el Futuro del Cuidado Restaurativo',
      p1: 'En Movement Beyond, creemos que la verdadera curación ocurre en la intersección de la experiencia clínica y el empoderamiento del paciente. Fundada en Annandale, VA, nuestra clínica nació de una visión para proporcionar algo más que el simple alivio de los síntomas.',
      p2: 'Nuestro equipo multidisciplinario de doctores y especialistas trabaja de manera colaborativa para diseñar rutas de recuperación de precisión que aborden las causas fundamentales de la disfunción. Ya sea que se esté recuperando de una cirugía, manejando dolor crónico o buscando optimizar su rendimiento atlético, estamos aquí para guiarle en cada paso del camino.',
    },
    contact: {
      title: 'Contáctenos',
      heading: 'Inicie su Camino a la Recuperación',
      description: '¿Tiene preguntas sobre nuestros servicios o desea programar una consulta? Complete el formulario y nuestro equipo clínico se pondrá en contacto con usted en un plazo de 24 horas.',
      directLine: 'Línea Directa',
      emailSupport: 'Soporte por Email',
      form: {
        firstName: 'Nombre',
        lastName: 'Apellido',
        email: 'Correo Electrónico',
        service: 'Servicio de Interés',
        message: 'Mensaje',
        placeholder: {
          firstName: 'Juana',
          lastName: 'Pérez',
          email: 'juana@example.com',
          message: '¿Cómo podemos ayudarle?',
        },
        submit: 'Enviar Mensaje',
      },
    },
    footer: {
      description: 'Movement Beyond Fisioterapia y Acupuntura. Recuperación de precisión para su vida activa.',
      quickLinks: 'Enlaces Rápidos',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: 'Todos los derechos reservados.',
    },
    philosophy: {
      title: 'Nuestro Enfoque',
      heading: 'Una Filosofía de Cuidado',
      items: [
        {
          id: '01',
          title: 'Cuidado Basado en Evidencia',
          description: 'Cada plan de tratamiento se basa en investigación clínica revisada por pares y marcadores fisiológicos objetivos.'
        },
        {
          id: '02',
          title: 'Autonomía Centrada en el Paciente',
          description: 'Le empoderamos con las herramientas y la educación necesarias para gestionar su salud más allá de las paredes de la clínica.'
        },
        {
          id: '03',
          title: 'Precisión Holística',
          description: 'No solo tratamos los síntomas; identificamos y corregimos las cadenas cinéticas subyacentes que causan la disfunción.'
        }
      ]
    }
  },
};
