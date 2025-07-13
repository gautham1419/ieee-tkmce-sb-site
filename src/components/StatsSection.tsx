const StatsSection = () => {
  const stats = [
    {
      number: "256+",
      label: "Active members",
      color: "text-primary"
    },
    {
      number: "100+", 
      label: "Events",
      color: "text-accent"
    },
    {
      number: "20+",
      label: "Awards", 
      color: "text-cosmic-teal"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-6xl md:text-7xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-lg font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;