using System;
using System.Collections.Generic;

namespace Lab1Rina.Models
{
    public partial class Rent
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Surname { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PhoneNumber { get; set; } = null!;
        public int PersonalNumber { get; set; }
        public int NumberOfPeople { get; set; }
        public string PickupDate { get; set; } = null!;
        public string DropDate { get; set; } = null!;
        public int? KompaniaId { get; set; }

        public virtual Kompania? Kompania { get; set; }
    }
}
