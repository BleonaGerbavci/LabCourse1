using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Pompa
    {
        public Pompa()
        {
            Kompania = new HashSet<Kompania>();
        }

        public int PompaId { get; set; }
        public string? Emri { get; set; }
        public string? EmriRruges { get; set; }
        public int? ZipCode { get; set; }

        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<Kompania> Kompania { get; set; }
    }
}
