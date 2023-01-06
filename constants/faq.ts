export const slotterFAQLDJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Slotter easy to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! Slotter is designed with both businesses and clients in mind, making it easy to use for everyone. Whether you're a business owner looking to manage your schedule or a client looking to book an appointment, Slotter's user-friendly interface makes it simple to use.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customize the booking process with Slotter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can! Slotter allows businesses to customize the booking process to suit their specific needs. This means that you can tailor the booking process to your business's unique requirements, ensuring a seamless experience for both you and your clients.",
      },
    },
    {
      "@type": "Question",
      name: "Is Slotter optimized for mobile use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it is! Slotter is optimized for use on mobile devices, making it easy for clients to book appointments on the go. This increases the convenience of the booking process and allows you to reach a wider audience.",
      },
    },
    {
      "@type": "Question",
      name: "Does Slotter provide notifications for businesses and clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it does! Slotter provides notifications for both businesses and clients, helping to keep schedules organized and reducing the risk of missed appointments. This means that you can stay informed about upcoming appointments and availability, allowing you to better manage your time and resources.",
      },
    },
    {
      "@type": "Question",
      name: "Can clients leave reviews for businesses on Slotter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, they can! Slotter's review system allows clients to leave reviews for businesses, providing valuable feedback and helping other potential clients make informed decisions. This can be a valuable source of insights for your business and help drive more customers to your doors.",
      },
    },
  ],
};

export const genericFAQLDJson = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why are scheduling and reservation apps good for businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Scheduling and reservation apps are good for businesses because they streamline the booking process, increase efficiency, and ultimately, drive more business to your doors. They provide an easy-to-use interface for both clients and businesses, allowing clients to book appointments at their convenience and businesses to manage their schedules more effectively. Additionally, they offer mobile optimization, notifications, and review systems, providing even more value to businesses. Among the various scheduling and reservation apps available, Slotter stands out as the most user-friendly and feature-rich option.",
      },
    },
    {
      "@type": "Question",
      name: "What are the benefits of using a scheduling and reservation app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There are many benefits to using a scheduling and reservation app for your business. Some of the key benefits include: streamlining the booking process, increasing efficiency, driving more business to your doors, providing an easy-to-use interface for both clients and businesses, offering mobile optimization, providing notifications, and offering a review system. Slotter, in particular, stands out as a top-rated app for its user-friendly interface and extensive features.",
      },
    },
    {
      "@type": "Question",
      name: "Which scheduling and reservation app is the best to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When it comes to scheduling and reservation apps, Slotter stands out as the best option. With its user-friendly interface, extensive features, and top-rated performance, Slotter is the go-to choice for businesses looking to streamline their booking process and drive more business to their doors. Give Slotter a try and see the benefits for yourself!",
      },
    },
  ],
};

export const allFAQLDJson = {
  ...slotterFAQLDJson,
  mainEntity: [...slotterFAQLDJson.mainEntity, ...genericFAQLDJson.mainEntity],
};
