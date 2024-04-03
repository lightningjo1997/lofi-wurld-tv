// https://github.com/nuxt-themes/alpine/blob/main/nuxt.schema.ts
export default defineAppConfig({
  alpine: {
    title: 'Lofi Wurld',
    description: 'Chill relaxing vibes',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/Lofi Wurld Light.svg', // path of the logo
        pathDark: '/Lofi Wurld Dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'alpine' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        text: "❤️ Lofi Wurld TV",
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      youtube:'@LofiWurld',
      instagram: 'lofiwurldmusic',
      twitter: 'lofiwurld',
      // linkedin: {
      //   icon: 'uil:linkedin',
      //   label: 'LinkedIn',
      //   href: 'https://www.linkedin.com/company/nuxtlabs'
      // }
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})