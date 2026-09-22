using System.ComponentModel.DataAnnotations;

namespace WebVI.Calculator.Models
{
    public class CalculatorViewModel
    {
        [Display(Name = "First Number")]
        [Required(ErrorMessage = "First number is required")]
        public decimal? A { get; set; }

        [Display(Name = "Second Number")]
        [Required(ErrorMessage = "Second number is required")]
        public decimal? B { get; set; }

        [Display(Name = "Operation")]
        [Required]
        public Operation? Op { get; set; }

        [Display(Name = "Result")]
        public decimal? Result { get; set; }

        public string? ErrorMessage { get; set; }
    }
}