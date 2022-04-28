using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Ulesja
    {
        public Ulesja()
        {
            BookingTicket = new HashSet<BookingTicket>();
        }

        public int Id { get; set; }
        public int? Number { get; set; }
        public string? Status { get; set; }
        public int? BusId { get; set; }

        public virtual Autobusi? Bus { get; set; }
        public virtual ICollection<BookingTicket> BookingTicket { get; set; }
    }
}
