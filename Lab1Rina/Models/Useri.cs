using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Useri
    {
        public Useri()
        {
            Pushimi = new HashSet<Pushimi>();
            RentAutobusin = new HashSet<RentAutobusin>();
            Rezervimi = new HashSet<Rezervimi>();
            RezervoAutobusin = new HashSet<RezervoAutobusin>();
        }

        public int UserId { get; set; }
        public string Emri { get; set; } = null!;
        public string Mbiemri { get; set; } = null!;
        public string Emaili { get; set; } = null!;
        public string Passwordi { get; set; } = null!;
        public string NrTelefonit { get; set; } = null!;
        public int? RoliId { get; set; }
        public int? ZipCode { get; set; }
        public string? Orari { get; set; }
        public int? DitetEpushimit { get; set; }

        public virtual Roli? Roli { get; set; }
        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<Pushimi> Pushimi { get; set; }
        public virtual ICollection<RentAutobusin> RentAutobusin { get; set; }
        public virtual ICollection<Rezervimi> Rezervimi { get; set; }
        public virtual ICollection<RezervoAutobusin> RezervoAutobusin { get; set; }
    }
}
