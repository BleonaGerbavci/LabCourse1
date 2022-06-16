using System;
using System.Collections.Generic;

namespace Lab1.Models
{
    public partial class Stacioni
    {
        public Stacioni()
        {
            Autobusi = new HashSet<Autobusi>();
        }

        public int StacioniId { get; set; }
        public string? EmriRruges { get; set; }
        public int? ZipCode { get; set; }

        public virtual Qyteti? ZipCodeNavigation { get; set; }
        public virtual ICollection<Autobusi> Autobusi { get; set; }
    }
}
