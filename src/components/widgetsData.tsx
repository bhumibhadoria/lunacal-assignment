export const AboutMeWidgetData = () => {
  return (
    <div className="flex flex-col items-center justify-content gap-2">
      <p>
        Hello! I'm Dave, your sales rep here from Salesforce. I've been working
        at this awesome company for 3 years now.
      </p>
      <p>
        I was born and raised in Albany, NY& have been living in Santa Carla for
        the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma
        and Ella. Both of them are just starting school, so my calender is
        usually blocked between 9-10 AM. This is a...
      </p>
    </div>
  );
};

export const ExperienceWidgetData = () => {
  return (
    <div className="flex flex-col items-center justify-content gap-2">
      <p>
        I have 5 years of experience in sales and have been working at
        Salesforce for the past 3 years. I've been able to close 50 deals in the
        past 6 months, and I'm looking forward to closing more deals in the
        future.
      </p>
      <p>
        I have a Bachelor's degree in Computer Science from the University of
        California, Berkeley. I've also...
      </p>
    </div>
  );
};

export const RecommendedWidgetData = () => {
  return (
    <div className="flex flex-col items-center justify-content gap-2 h-48 overflow-y-scroll pr-2 rec-widget">
      <p>
        I would recommend the following products to you based on your previous
        purchases:
      </p>
      <div className="flex flex-col items-start justify-start">
        <p className="font-bold">1. Salesforce CRM</p>
        <p>
          Salesforce CRM is a customer relationship management software that
          helps businesses manage their sales, marketing, and customer service
          activities.
        </p>
        <p className="font-bold">2. HubSpot CRM</p>
        <p>
          HubSpot CRM is a free customer relationship management software that
          helps businesses manage their sales, marketing, and customer service
          activities.
        </p>
        <p className="font-bold">3. Zoho CRM</p>
        <p>
          Zoho CRM is a customer relationship management software that helps
          businesses manage their sales, marketing, and customer service
          activities.
        </p>
      </div>
    </div>
  );
};
