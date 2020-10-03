using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace GoalsApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GoalsController : ControllerBase
    {
        private readonly ILogger<GoalsController> _logger;

        public GoalsController(ILogger<GoalsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public GoalList GetGoals()
        {
            return new GoalList
            {
                Goals = new List<Goal>() {
                    new Goal { Name = "Finish all the work!", Complete = false }
                }
            };
        }
    }

    public class Goal
    {
        public string Name { get; set; }
        public bool Complete { get; set; }
    }

    public class GoalList
    {
        public IEnumerable<Goal> Goals { get; set; }
    }
}