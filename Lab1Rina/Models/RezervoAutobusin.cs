using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class RezervoAutobusin
    {
        public int RezervimiId { get; set; }
        public string DataRezervimit { get; set; } = null!;
        public string? DataKthimit { get; set; }
        public int? UserId { get; set; }
        public int? AutobusiId { get; set; }

        public virtual Autobusi? Autobusi { get; set; }
        public virtual Useri? User { get; set; }
    }
}
