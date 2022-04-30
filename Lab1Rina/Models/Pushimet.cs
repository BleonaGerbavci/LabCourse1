using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Pushimet
    {
        public int Id { get; set; }
        public int? StafiId { get; set; }
        public string? Pvjetore { get; set; }
        public string? Pmjekesore { get; set; }

        public virtual Stafi? Stafi { get; set; }
    }
}
