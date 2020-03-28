using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace API_Service.Models
{
    public class StudentSubject
    {
        [Key,Column(Order =1)]
        [ForeignKey("Student")]
        public int StID { get; set; }
        [Key, Column(Order = 2)]
        [ForeignKey("Subject")]

        public int SubID { get; set; }
        public int Degree { get; set; }
        public Student Student { get; set; }
        public Subject Subject { get; set; }
    }
}