using System;
using System.Linq;
using FakeItEasy;
using GoalsApp.Models;
using GoalsApp.Services;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace GoalsApp.Tests
{
    public class GoalServiceTests
    {
        private readonly GoalService goalService;
        private readonly DbContextOptions<DataContext> dbContextOptions = new DbContextOptionsBuilder<DataContext>()
            .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
            .Options;

        public GoalServiceTests()
        {
            var testDataContext = new DataContext(dbContextOptions);
            goalService = new GoalService(testDataContext);
        }

        [Fact]
        public void Test1()
        {
            // Arrange
            var newGoal = new Goal(){ Name = "Test me!" };
            using(var context = new DataContext(dbContextOptions))
            {
                context.Goals.Add(newGoal);
                context.SaveChanges();
            }

            // Act
            var goals = goalService.GetGoals().Result;

            // Assert
            Assert.Equal(newGoal.Id, goals.Goals.First().Id);
        }

        [Fact]
        public void Test2()
        {
            Assert.True(true);
        }
    }
}
