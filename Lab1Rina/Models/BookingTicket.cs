using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class BookingTicket
    {
        public BookingTicket()
        {
            CancelBooking = new HashSet<CancelBooking>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public string City { get; set; } = null!;
        public string Type { get; set; } = null!;
        public int? BusId { get; set; }
        public int? UlesjaId { get; set; }
        public int? LinjaId { get; set; }

        public virtual Autobusi? Bus { get; set; }
        public virtual Linja? Linja { get; set; }
        public virtual Ulesja? Ulesja { get; set; }
        public virtual ICollection<CancelBooking> CancelBooking { get; set; }
    }
}
