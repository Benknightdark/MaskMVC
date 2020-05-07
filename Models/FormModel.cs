using System;
using MaskMan.Extensions.Attributes;

namespace MaskMan.Models
{
    public class FormModel
    {
        [MobileFormat(ErrorMessage = "MobileFormatError")]
        public string Mobile { get; set; }
        public string Tel { get; set; }
        public DateTime Birthday { get; set; }
        public TimeSpan StartTime { get; set; }
        public DateTime OnlyDate{get;set;}
    }
}