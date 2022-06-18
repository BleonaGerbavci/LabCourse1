using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class RentAutobusin
    {
        public int RentId { get; set; }
        public string PickupDate { get; set; } = null!;
        public string DropDate { get; set; } = null!;
        public decimal? Cmimi { get; set; }
        public int? UserId { get; set; }

        public virtual Useri? User { get; set; }
    }
}
