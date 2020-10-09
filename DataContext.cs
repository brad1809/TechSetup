using GoalsApp.Models;
using Microsoft.EntityFrameworkCore;

namespace GoalsApp
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Goal> Goals { get; set; }
    }
}