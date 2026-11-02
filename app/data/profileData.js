import teacherTrainingImg from '~/assets/images/teacher-training.png'
import classPracticeImg from '~/assets/images/class-practice.png'

export const profileData = {
  header: {
    avatar: '林',
    name: '林祐菖',
    tagline: '中原大學 電機工程學系 ｜ AI 協作網站開發學員'
  },
  about: {
    label: 'PROFILE',
    title: '自我介紹',
    paragraphs: [
      '您好，我是林祐菖，目前就讀於中原大學電機工程學系。成長於雲林，自小受家庭勤懇務實態度的薰陶，培養出穩重、負責且注重團隊協作的處事特質。',
      '在平時生活與學習中，我擅長傾聽並適度表達想法，樂於在團隊中維持良好互動。我十分熱愛羽球運動（特別是雙打），羽球雙打中的默契配合、相互信任以及攻守轉化時的策略思考，也深刻影響了我的求學與待人處事方式。面對複雜的工程與科學問題時，我總能保持耐心與專注，一步步探索並尋求最佳解方。'
    ]
  },
  interests: {
    label: 'INTERESTS',
    title: '學習興趣',
    items: [
      {
        id: 'telecom',
        title: '通訊系統與訊號處理',
        desc: '在電機專業課程中，深入研習通信系統、通信調變理論與實驗，對通訊原理、訊號處理與調變技術深感興趣，確立了未來朝通訊領域深造與發展的方向。'
      },
      {
        id: 'math',
        title: '數學分析與基礎理論',
        desc: '對數學抱持濃厚熱忱，尤其在進入大學後接觸「機率與統計」及「線性代數」等理論基礎時，享受邏輯推導與複雜問題迎刃而解的成就感。'
      },
      {
        id: 'language',
        title: '外語進修與跨文化交流',
        desc: '注重多元語言能力培養，平時自主學習日文並積極準備日語檢定；同時持續加強英語能力，為日後閱讀國際期刊與研討會交流打下基石。'
      },
      {
        id: 'badminton',
        title: '羽球運動與策略思維',
        desc: '熱愛羽球雙打運動，享受在球場上互相補位與策略推演的過程，體會團隊默契、沉著冷靜與相互激勵的重要性。'
      }
    ]
  },
  skills: {
    label: 'SKILLS',
    title: '目前正在學習的技能',
    categories: [
      {
        id: 'ee',
        title: '電機與通訊工程基礎',
        tags: [
          '通訊系統原理',
          '信號與系統',
          '通信調變技術與實驗',
          '機率與統計分析',
          '線性代數'
        ]
      },
      {
        id: 'dev',
        title: '程式開發與資訊應用',
        tags: [
          '程式語言邏輯與語法',
          '語意化 HTML5',
          'CSS3 響應式切版',
          'Git 版本控制',
          'AI 協作開發工具應用'
        ]
      },
      {
        id: 'lang',
        title: '外語能力自主精進',
        tags: [
          '日語檢定自主研習',
          '專業英文文獻研讀'
        ]
      }
    ]
  },
  projects: {
    label: 'PROJECTS',
    title: '作品介紹',
    items: [
      {
        id: 'teacher-training',
        title: '師培生計畫',
        desc: '教育部師培生 AI 協作教學培育計畫網站',
        url: 'https://aiteachertraining.vercel.app/',
        imgSrc: teacherTrainingImg,
        alt: '師培生計畫網站預覽',
        ariaLabel: '前往師培生計畫網站'
      },
      {
        id: 'class-practice',
        title: '課堂練習',
        desc: '個人學習成果展示與課堂作業網站',
        url: 'https://linyouchang.github.io/VScode-LYC/',
        imgSrc: classPracticeImg,
        alt: '課堂練習網站預覽',
        ariaLabel: '前往課堂練習網站'
      }
    ]
  },
  footer: {
    copyright: '© 2026 林祐菖 · AI 協作網站開發課程作業'
  }
}

