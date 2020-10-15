using System.Collections.Generic;

namespace GoalsApp.Models
{
    public class Goal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool Completed { get; set; }
    }

    public class GoalList
    {
        public IEnumerable<Goal> Goals { get; set; }
    }
}