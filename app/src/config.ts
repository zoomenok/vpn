import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to Free World!',
          description:
            "Secure and safe VPN service for any task<br><br>It's <b>anonymous</b>, <b>fast</b>, and <b>stable</b></a>!",
          button: 'Next',
        },

               // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          title: 'What is your case?',
          description: '',
          form: [
            {
              id: 'privacy',
              placeholder: 'Anonymous surfing',
              type: 'checkbox',
            },
            {
              id: 'access',
              placeholder: 'Access blocked content',
              type: 'checkbox',
            },
            {
              id: 'other',
              placeholder: 'Other',
              type: 'checkbox',
            },
          ],
          button: 'Next',
        },


        // go to paywall slide
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: 'Are you ready?',
          description: "Let's go to Paywall",
          button: {
            content: 'Go to Paywall',
            to: '/paywall',
          },
        },
      ],
    },

    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Get VPN and welcome to Free World',
      list: [
        'No logs',
        'Noa ads',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '4$/month',
          discount: '',
          price: 4,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '2$/month',
          discount: 'Discount 50%',
          price: 24,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
    },
  ],
});
