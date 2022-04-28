using System;
using System.Collections.Generic;

namespace BusManagementSystem.Models
{
    public partial class Stafi
    {
        public Stafi()
        {
            Pushimet = new HashSet<Pushimet>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? Position { get; set; }
        public int? BusId { get; set; }
        public int? OrariId { get; set; }
        public int? KompaniaId { get; set; }

        public virtual Autobusi? Bus { get; set; }
        public virtual Kompania? Kompania { get; set; }
        public virtual Orari? Orari { get; set; }
        public virtual ICollection<Pushimet> Pushimet { get; set; }
    }
}
