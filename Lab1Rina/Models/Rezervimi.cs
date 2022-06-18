using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Rezervimi
    {
        public int RezervimiId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public string Emaili { get; set; } = null!;
        public string NrTelefonit { get; set; } = null!;
        public int? UserId { get; set; }
        public int? LinjaId { get; set; }

        public virtual Linja? Linja { get; set; }
        public virtual Useri? User { get; set; }
    }
}
