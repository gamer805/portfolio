const Activities = () => {
  const activities = [
    {
      name: "Volunteer, Abdul El-Sayed Senate Campaign",
      period: "November 2025 – Present"
    },
    {
      name: "Campus Philharmonia Orchestra",
      period: "August 2024 – May 2025"
    }
  ];

  return (
    <section>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <h3 className="text-lg font-semibold text-white">{activity.name}</h3>
              <p className="text-gray-400 text-sm mt-1 md:mt-0">{activity.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
