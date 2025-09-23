export default function HowItWorksAffiliates() {
  const steps = [
    {
      number: "1",
      title: "Sign up to get your unique referral link and discount code",
      description:
        "Get started instantly with your personalized affiliate dashboard and tracking tools.",
    },
    {
      number: "2",
      title: "Share your link and grow your network",
      description:
        "Promote Solo Clash to your audience through content, social media, and community engagement.",
    },
    {
      number: "3",
      title:
        "Earn commissions and unlock rewards as you hit referral milestones",
      description:
        "Watch your earnings grow while unlocking exclusive perks and higher commission rates.",
    },
  ];
  return (
    <section
      className="justify-center text-center px-6 lg:px-20 py-30"
      style={{ backgroundColor: "#030303" }}
    >
      <div className="flex flex-col justify-center items-center gap-6">
        {/* Heading */}
        <h2
          className="text-3xl md:text-4xl font-bold text-white"
          style={{ width: "680px" }}
        >
          How It Works
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed w-[667px">
          Three simple steps to start earning with Solo Clash.
        </p>
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Timeline Line: only till last circle */}
          <div
            className="hidden md:block absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gray-700"
            style={{ height: `calc(100% - 5.5rem)` }}
          />

          <div className="space-y-24">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex flex-col items-center text-center md:flex-row md:items-start md:text-inherit ${
                    isRight ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {/* Number Circle - always centered on mobile, absolute on desktop */}
                  <div className="flex md:hidden items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-500 bg-black text-white text-lg font-semibold">
                      {step.number}
                    </div>
                  </div>
                  {/* Step Content - centered on mobile */}
                  <div className="w-full md:w-5/12 px-2 md:px-0">
                    <h3 className="text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-gray-400">{step.description}</p>
                  </div>
                  {/* Number Circle for desktop */}
                  {i === 0 ? (
                    <div
                      className="hidden md:flex absolute left-1/2 top-0 items-center justify-center text-white text-lg font-semibold"
                      style={{
                        borderRadius: "58px",
                        padding: "23px 32px",
                        background:
                          "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.08) 100%)",
                        boxShadow: "0px 2px 12px rgba(7, 5, 24, 0.5)",
                        backdropFilter: "blur(11.2993px)",
                        transform: "translateX(-50%)",
                        zIndex: 10,
                      }}
                    >
                      {step.number}
                    </div>
                  ) : (
                    <div className="hidden md:flex absolute left-1/2 top-0 h-[74px] w-[74px] -translate-x-1/2 items-center justify-center rounded-full border border-gray-500 bg-black text-white text-lg font-semibold">
                      {step.number}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
