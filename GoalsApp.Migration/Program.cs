using System;
using System.Linq;
using System.Reflection;
using DbUp;

namespace GoalsApp.Migration
{
    class Program
    {
        static int Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var connectionString = args.FirstOrDefault() ?? "Data Source=.;Initial Catalog=GoalsDB;Integrated Security=true";

            EnsureDatabase.For.SqlDatabase(connectionString);

            var upgrader = DeployChanges.To.SqlDatabase(connectionString).WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly()).LogToConsole().Build();

            var result = upgrader.PerformUpgrade();


            if (!result.Successful)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(result.Error);
                Console.ResetColor();
#if DEBUG
                Console.ReadLine();
#endif
                return -1;
            }

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Success!");
            Console.ResetColor();
            return 0;
        }
    }
}
