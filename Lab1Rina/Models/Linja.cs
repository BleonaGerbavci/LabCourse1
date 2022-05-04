using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Linja
    {
        public Linja()
        {
            BookingTicket = new HashSet<BookingTicket>();
        }

        public int Id { get; set; }
        public string? PickupLocation { get; set; }
        public string? DestinationLocaion { get; set; }
        public decimal? Price { get; set; }
        public string? Duration { get; set; }

        public virtual ICollection<BookingTicket> BookingTicket { get; set; }
    }
}
