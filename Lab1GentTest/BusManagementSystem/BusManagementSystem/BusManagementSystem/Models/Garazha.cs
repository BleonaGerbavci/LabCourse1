using System;
using System.Collections.Generic;

namespace BusManagementSystem.Models
{
    public partial class Garazha
    {
        public Garazha()
        {
            Autobusi = new HashSet<Autobusi>();
        }

        public int Id { get; set; }
        public string? StreetName { get; set; }
        public string? City { get; set; }

        public virtual ICollection<Autobusi> Autobusi { get; set; }
    }
}
