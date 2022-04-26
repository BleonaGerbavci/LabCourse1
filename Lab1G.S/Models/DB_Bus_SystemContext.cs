using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Lab1.Models
{
    public partial class DB_Bus_SystemContext : DbContext
    {
        public DB_Bus_SystemContext()
        {
        }

        public DB_Bus_SystemContext(DbContextOptions<DB_Bus_SystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Autobusi> Autobusi { get; set; } = null!;
        public virtual DbSet<BookingTicket> BookingTicket { get; set; } = null!;
        public virtual DbSet<CancelBooking> CancelBooking { get; set; } = null!;
        public virtual DbSet<ContactUs> ContactUs { get; set; } = null!;
        public virtual DbSet<Garazha> Garazha { get; set; } = null!;
        public virtual DbSet<Klienti> Klienti { get; set; } = null!;
        public virtual DbSet<Kompania> Kompania { get; set; } = null!;
        public virtual DbSet<Linja> Linja { get; set; } = null!;
        public virtual DbSet<Oferta> Oferta { get; set; } = null!;
        public virtual DbSet<Orari> Orari { get; set; } = null!;
        public virtual DbSet<Pompa> Pompa { get; set; } = null!;
        public virtual DbSet<Pushimet> Pushimet { get; set; } = null!;
        public virtual DbSet<Rent> Rent { get; set; } = null!;
        public virtual DbSet<Stafi> Stafi { get; set; } = null!;
        public virtual DbSet<Ulesja> Ulesja { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-9NLB6KE;Initial Catalog=DB_Bus_System;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Autobusi>(entity =>
            {
                entity.Property(e => e.GarazhaId).HasColumnName("Garazha_Id");

                entity.Property(e => e.KompaniaId).HasColumnName("Kompania_Id");

                entity.Property(e => e.PompaId).HasColumnName("Pompa_Id");

                entity.HasOne(d => d.Garazha)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.GarazhaId)
                    .HasConstraintName("FK__Autobusi__Garazh__2E1BDC42");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Autobusi__Kompan__2F10007B");

                entity.HasOne(d => d.Pompa)
                    .WithMany(p => p.Autobusi)
                    .HasForeignKey(d => d.PompaId)
                    .HasConstraintName("FK__Autobusi__Pompa___300424B4");
            });

            modelBuilder.Entity<BookingTicket>(entity =>
            {
                entity.Property(e => e.BusId).HasColumnName("Bus_Id");

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.LinjaId).HasColumnName("Linja_Id");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UlesjaId).HasColumnName("Ulesja_Id");

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.BookingTicket)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__BookingTi__Bus_I__48CFD27E");

                entity.HasOne(d => d.Linja)
                    .WithMany(p => p.BookingTicket)
                    .HasForeignKey(d => d.LinjaId)
                    .HasConstraintName("FK__BookingTi__Linja__4AB81AF0");

                entity.HasOne(d => d.Ulesja)
                    .WithMany(p => p.BookingTicket)
                    .HasForeignKey(d => d.UlesjaId)
                    .HasConstraintName("FK__BookingTi__Ulesj__49C3F6B7");
            });

            modelBuilder.Entity<CancelBooking>(entity =>
            {
                entity.Property(e => e.BookingId).HasColumnName("Booking_Id");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.Booking)
                    .WithMany(p => p.CancelBooking)
                    .HasForeignKey(d => d.BookingId)
                    .HasConstraintName("FK__CancelBoo__Booki__4D94879B");
            });

            modelBuilder.Entity<ContactUs>(entity =>
            {
                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Message)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Garazha>(entity =>
            {
                entity.Property(e => e.City)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.StreetName)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Klienti>(entity =>
            {
                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Kompania>(entity =>
            {
                entity.Property(e => e.Adress)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.City)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Linja>(entity =>
            {
                entity.Property(e => e.DestinationLocaion)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Destination_locaion");

                entity.Property(e => e.Duration)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PickupLocation)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Pickup_location");

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");
            });

            modelBuilder.Entity<Oferta>(entity =>
            {
                entity.Property(e => e.BusId).HasColumnName("Bus_Id");

                entity.Property(e => e.Description)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.KompaniaId).HasColumnName("Kompania_Id");

                entity.Property(e => e.Price).HasColumnType("decimal(5, 2)");

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.Oferta)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__Oferta__Bus_Id__44FF419A");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Oferta)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Oferta__Kompania__45F365D3");
            });

            modelBuilder.Entity<Orari>(entity =>
            {
                entity.Property(e => e.EndingHour)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Ending_hour");

                entity.Property(e => e.StartingHour)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Starting_hour");

                entity.Property(e => e.WeekDay)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("Week_Day");
            });

            modelBuilder.Entity<Pompa>(entity =>
            {
                entity.Property(e => e.Adress)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Pushimet>(entity =>
            {
                entity.Property(e => e.Pmjekesore)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PMjekesore");

                entity.Property(e => e.Pvjetore)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("PVjetore");

                entity.Property(e => e.StafiId).HasColumnName("Stafi_Id");

                entity.HasOne(d => d.Stafi)
                    .WithMany(p => p.Pushimet)
                    .HasForeignKey(d => d.StafiId)
                    .HasConstraintName("FK__Pushimet__Stafi___4222D4EF");
            });

            modelBuilder.Entity<Rent>(entity =>
            {
                entity.Property(e => e.DropDate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.KompaniaId).HasColumnName("Kompania_Id");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PickupDate)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Rent)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Rent__Kompania_I__5070F446");
            });

            modelBuilder.Entity<Stafi>(entity =>
            {
                entity.Property(e => e.BusId).HasColumnName("Bus_Id");

                entity.Property(e => e.Email)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.KompaniaId).HasColumnName("Kompania_Id");

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.OrariId).HasColumnName("Orari_Id");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Position)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Surname)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.Stafi)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__Stafi__Bus_Id__32E0915F");

                entity.HasOne(d => d.Kompania)
                    .WithMany(p => p.Stafi)
                    .HasForeignKey(d => d.KompaniaId)
                    .HasConstraintName("FK__Stafi__Kompania___34C8D9D1");

                entity.HasOne(d => d.Orari)
                    .WithMany(p => p.Stafi)
                    .HasForeignKey(d => d.OrariId)
                    .HasConstraintName("FK__Stafi__Orari_Id__33D4B598");
            });

            modelBuilder.Entity<Ulesja>(entity =>
            {
                entity.Property(e => e.BusId).HasColumnName("Bus_Id");

                entity.Property(e => e.Status)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Bus)
                    .WithMany(p => p.Ulesja)
                    .HasForeignKey(d => d.BusId)
                    .HasConstraintName("FK__Ulesja__Bus_Id__37A5467C");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
