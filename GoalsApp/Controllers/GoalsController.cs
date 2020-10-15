using System.Collections.Generic;
using System.Threading.Tasks;
using GoalsApp.Models;
using GoalsApp.Services;
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
    private readonly IGoalService goalService;

    public GoalsController(ILogger<GoalsController> logger, IGoalService service)
    {
      _logger = logger;
      goalService = service;
    }

    [HttpGet]
    public async Task<GoalList> GetGoals()
    {
      return await goalService.GetGoals();
    }

    [HttpPost]
    public async Task<Goal> CreateGoal(CreateGoalDto dto)
    {
      return await goalService.CreateGoal(dto);
    }

    public class CreateGoalDto
    {
      public string Name { get; set; }
    }
  }
}