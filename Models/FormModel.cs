using System;
using System.ComponentModel.DataAnnotations;
using MaskMan.Extensions.Attributes;

namespace MaskMan.Models
{
    public class FormModel
    {
        [Required(ErrorMessage = "Required")]

        //[MobileFormat(ErrorMessage = "MobileFormatError")]
        [RegularExpression("^09[0-9]{8}$", ErrorMessage = "MobileFormatError")]
        public string Mobile { get; set; }
        public string Tel { get; set; }
        public DateTime Birthday { get; set; }
        public TimeSpan StartTime { get; set; }
        public DateTime OnlyDate{get;set;}
    }
}