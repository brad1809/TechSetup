using System.Threading.Tasks;
using GoalsApp.Models;
using Microsoft.EntityFrameworkCore;
using static GoalsApp.Controllers.GoalsController;

namespace GoalsApp.Services
{
    public interface IGoalService
    {
        Task<Goal> CreateGoal(CreateGoalDto dto);
        Task<GoalList> GetGoals();
    }

    public class GoalService : IGoalService
    {
        private readonly DataContext dataContext;

        public GoalService(DataContext _dataContext)
        {
            dataContext = _dataContext;
        }

        public async Task<GoalList> GetGoals()
        {
            var goals = await dataContext.Goals.ToListAsync();

            return new GoalList
            {
                Goals = goals
            };
        }

        public async Task<Goal> CreateGoal(CreateGoalDto dto)
        {
            var newGoal = new Goal()
            {
                Name = dto.Name
            };

            dataContext.Goals.Add(newGoal);

            await dataContext.SaveChangesAsync();

            return newGoal;
        }
    }
}