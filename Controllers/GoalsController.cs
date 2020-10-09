using System.Collections.Generic;
using System.Threading.Tasks;
using GoalsApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace GoalsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GoalsController : ControllerBase
    {
        private readonly ILogger<GoalsController> _logger;
        private readonly DataContext dataContext;

        public GoalsController(ILogger<GoalsController> logger, DataContext context)
        {
            _logger = logger;
            dataContext = context;
        }

        [HttpGet]
        public async Task<GoalList> GetGoals()
        {
            var goals = await dataContext.Goals.ToListAsync();

            return new GoalList
            {
                Goals = goals
            };
        }

        [HttpPost]
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

        public class CreateGoalDto
        {
            public string Name { get; set; }
        }
    }
}