using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Orari
    {
        public Orari()
        {
            Stafi = new HashSet<Stafi>();
        }

        public int Id { get; set; }
        public string? WeekDay { get; set; }
        public string? StartingHour { get; set; }
        public string? EndingHour { get; set; }

        public virtual ICollection<Stafi> Stafi { get; set; }
    }
}
