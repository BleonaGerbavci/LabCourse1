using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class CancelBooking
    {
        public int Id { get; set; }
        public int? BookingId { get; set; }
        public string Email { get; set; } = null!;

        public virtual BookingTicket? Booking { get; set; }
    }
}
