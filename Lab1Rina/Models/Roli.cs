using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Roli
    {
        public Roli()
        {
            Useri = new HashSet<Useri>();
        }

        public int RoliId { get; set; }
        public string? EmriRolit { get; set; }

        public virtual ICollection<Useri> Useri { get; set; }
    }
}
