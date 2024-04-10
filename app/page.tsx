import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Q1. From this list, rank your 5 most favourite and 5 least favourite
      support tasks. Provide a brief explanation for each
      <br />
      Answer
      <br />
      Top 5 Favorite Support Tasks
      <br />
      Creating Video Tutorials: This task allows for creativity and helps users
      learn effectively through visual aids, making it engaging and impactful.
      <br />
      Developing New Features with Product Team: Collaborating with the product
      team based on customer feedback can be exciting as it involves innovation
      and directly improving the product.
      <br />
      Acting as Dedicated CSE for Key Customers: Building strong relationships
      with key customers and ensuring their success can be rewarding and
      fulfilling.
      <br />
      Analyzing Support Tickets for Trends: Identifying trends to improve the
      product shows the impact of your work on a larger scale and contributes to
      product development.
      <br />
      Working with Engineering Teams During Incidents: Being involved in
      incident response provides a sense of urgency, teamwork, and
      problem-solving that can be both challenging and rewarding.
      <br />
      Top 5 Least Favorite Support Tasks
      <br />
      Responding to 50+ Support Requests Daily: While essential, the sheer
      volume can be overwhelming and may limit the depth of support provided to
      each customer.
      <br />
      Responding to Queries on Various 3rd Party Sites: Managing multiple
      platforms for queries can be time-consuming and challenging to maintain
      consistency.
      <br />
      Finding and Recruiting Support Teammates: The recruitment process can be
      demanding and time-consuming, requiring significant effort and resources.
      <br />
      Scheduling Time-Off Coverage: While necessary for team efficiency,
      managing coverage can be administratively burdensome and less directly
      related to customer success.
      <br />
      Digging Through Logs to Troubleshoot Projects: While crucial for
      problem-solving, this task can be tedious and time-intensive, requiring
      meticulous attention to detail.
      <br />
      Q2. What do you want to learn or do more of at work
      <br />
      Answer:- I want to learn more about how users are using next.js in
      differnet situations and also how we can use the new features of next js
      to assist them in their Projects
      <br />
      Q3. Describe how you solved a challenge or technical issue that you faced
      in a previous role (preferably in a previous support role). How did you
      determine that your solution was successful
      <br />
      In my previous role as a support specialist for restaurants, I once faced
      an issue where a client needed to update the software on their ovens to
      allow for the preparation of some newly released bread products. However,
      they were running into errors during the installation process. To solve
      this challenge, I first reached out to a tech-savvy user at the client's
      location and arranged a call to better understand the issue. Through our
      discussion and reviewing email logs, I was able to determine that the
      error was related to the syntax in the .yml configuration file used for
      the oven software update. I worked closely with the client to identify the
      specific syntax issues in the .yml file and provided step-by-step guidance
      on how to correct them. Once the changes were made, we re-ran the
      installation process, and the update was successful. To determine the
      success of the solution, I monitored the client's ability to prepare the
      new bread products without any further issues
      <br />
      Q4 When would you choose to use Edge Functions, Serverless Functions, or
      Edge Middleware with Vercel?
      <br />
      Serverless Functions - cloud functions that execute in response to events
      without the need to manage the underlying server infrastructure can be
      seen as aws lambda functions or Azure Functions.
      <br />
      Edge Functions - Edge functions are like CDNS (content delivery networks)
      that can be used to deliver content to end users. example - aws
      cloudfront, Azure CDN
      <br />
      Edge Middleware - is designed to run before the backend logic,
      intercepting requests coming to serverless functions. It is deployed
      globally on Vercel's edge locations and runs server-side code close to the
      user's origin, Unfortunately I have not very good understanding of this
      part.
      <br />
      Q5. Imagine a customer writes in requesting help with a build issue on a
      framework or technology that you've not seen before. How would you begin
      troubleshooting this and what questions would you ask the customer to
      understand the situation better?
      <br />
      Answer - Ask the customer to describe the problem in detail, including any
      error messages or warnings they have encountered.
      <br />
      Request the customer to provide any relevant code, screenshots, and
      configuration files that might be causing the issue, including any files
      they might have changed.
      <br />
      Inquire about the customer's development environment, including the
      operating system, version of the framework or technology, and any
      dependencies or plugins they are using.
      <br />
      Ask the customer to describe their build process in detail, including any
      build tools (Grunt, Gulp, Webpack, Vite) or any custom scripts they are
      using.
      <br />
      Inquire about any steps the customer might have taken to troubleshoot the
      issue themselves, such as checking the framework's documentation or
      community forums.
      <br />
      Research the framework or technology to familiarize myself with its
      features and common issues.
      <br />
      Test potential solutions on my end to ensure they work as expected.
      <br />
      Provide the customer with a potential solution and follow up to ensure the
      issue has been resolved.
      <br />
      Q6. The customer from question 5 replies to your response with the below
      “I’m so frustrated. I’ve been trying to make this work for hours and I
      just can’t figure it out. It must be a platform issue so just fix it for
      me instead of asking me questions.” Please write a follow-up reply to the
      customer.
      <br />
      Answer - I apologize for the inconvenience you have experienced. rest
      assured I will try my best to resolve this for you. I completely
      understand that things might not be working as expected at the moment but
      rest assured let me quickly check my Knowledge bases to see if I could
      assist you with a workaround for you. Thank you for your time and patience
      in taking the time to try out a different workaround. and I understand
      that sometimes there are some issues that might take up a lot of time.
      Sure on our end I will try to check the platform once and give me some
      time to check the information for you.
      <br />
      Q7. A customer writes in to the Helpdesk asking "How do I do a redirect
      from the /blog path to https://example.com?" Please write a reply to the
      customer. Feel free to add any information about your decision making
      process after the reply.
      <br />
      Answer - To redirect from the /blog path to https://example.com in a
      Next.js application, you can achieve this by creating a custom server or
      using Next.js's built-in API routes. For more Information check the
      documentation once.
      https://nextjs.org/docs/app/building-your-application/routing/redirecting
      <br />
      Q8. A customer is creating a site and would like their project not to be
      indexed by search engines. Please write a reply to the customer. Feel free
      to add any information about your decision making process after the reply.
      <br />
      Answer - To ensure your Next.js project is not indexed by search engines,
      you can utilize the noindex meta tag. This tag instructs search engines
      not to index the page, effectively keeping it out of search results.
      Here's how you can implement it: This tag communicates to search engines
      that the page should not be indexed
      <br />
      Use robots.txt for Global Settings: If you want to prevent search engines
      from crawling your entire site or specific directories, you can create a
      robots.txt file in the public directory of your Next.js project.
      <br />
      <pre>
        <code>
          {`
<Head>
  <meta name="robots" content="noindex" />
</Head>
`}
        </code>
      </pre>
      <br />
      <pre>
        <code>
          {`
          User-agent: *
Disallow: /private-directory/
          `}
        </code>
      </pre>
      <br />
      Q9. What do you think is one of the most common problems which customers
      ask Vercel for help with? How would you help customers to overcome common
      problems, short-term and long-term
      <br />
      Answer - In my humble opinion most common problems customers ask Vercel
      for help with are deployment issues, followed by integration with other
      platforms as vercel is a Front end development framework there might be a
      lot of queries regarding deployment platforms integration
      <br />
      Q10. How could we improve or alter this familiarisation exercise?
      <br />
      Answer - Answer - Unfortunately, I am unable to get your question on this
      one, but regarding suggestions on this exercise this is a well-curated
      list of questions with some thought-provoking questions, I really like
      this kind of take-home exercise. thanks to the authors for this one.
      <br />
    </main>
  );
}
