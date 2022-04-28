using System;
using System.Collections.Generic;

namespace BusManagementSystem.Models
{
    public partial class Autobusi
    {
        public Autobusi()
        {
            BookingTicket = new HashSet<BookingTicket>();
            Oferta = new HashSet<Oferta>();
            Stafi = new HashSet<Stafi>();
            Ulesja = new HashSet<Ulesja>();
        }

        public int Id { get; set; }
        public int? Number { get; set; }
        public int? Capacity { get; set; }
        public int? FuelCapacity { get; set; }
        public int? GarazhaId { get; set; }
        public int? KompaniaId { get; set; }
        public int? PompaId { get; set; }

        public virtual Garazha? Garazha { get; set; }
        public virtual Kompania? Kompania { get; set; }
        public virtual Pompa? Pompa { get; set; }
        public virtual ICollection<BookingTicket> BookingTicket { get; set; }
        public virtual ICollection<Oferta> Oferta { get; set; }
        public virtual ICollection<Stafi> Stafi { get; set; }
        public virtual ICollection<Ulesja> Ulesja { get; set; }
    }
}
