using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace MaskMan.Extensions.Attributes {
    /// <summary>
    /// 手機號碼格式驗證
    /// </summary>
    public class MobileFormat : ValidationAttribute {

        public MobileFormat () { }

        public override bool IsValid (object value) {

            return  Regex.IsMatch ((string) value, @"^09[0-9]{8}$");
        }
    }
}