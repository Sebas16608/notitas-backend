using Microsoft.EntityFrameworkCore;
using Notitas.Model;
using Users.Model;

namespace Apps.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Notita> Notitas { get; set; }
        public DbSet<User> Users { get; set; }
    }
}