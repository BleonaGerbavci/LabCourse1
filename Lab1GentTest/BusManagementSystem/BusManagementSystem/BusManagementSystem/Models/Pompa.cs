using System;
using System.Collections.Generic;

namespace BusManagementSystem.Models
{
    public partial class Pompa
    {
        public Pompa()
        {
            Autobusi = new HashSet<Autobusi>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Adress { get; set; }

        public virtual ICollection<Autobusi> Autobusi { get; set; }
    }
}
