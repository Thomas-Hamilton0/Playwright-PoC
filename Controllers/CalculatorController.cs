using Microsoft.AspNetCore.Mvc;
using WebVI.Calculator.Models;
using WebVI.Calculator.Services;

namespace WebVI.Calculator.Controllers
{
    public class CalculatorController : Controller
    {
        private readonly IArithmeticService _calc;

        public CalculatorController(IArithmeticService calc)
        {
            _calc = calc;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(new CalculatorViewModel { Op = Operation.Add });
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(CalculatorViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            try
            {
                model.Result = _calc.Calculate(model.A!.Value, model.B!.Value, model.Op!.Value);
            }
            catch (DivideByZeroException ex)
            {
                ModelState.AddModelError(nameof(model.B), ex.Message);
                model.ErrorMessage = ex.Message;
                return View(model);
            }
            catch (Exception)
            {
                ModelState.AddModelError(string.Empty, "An error occurred while calculating.");
                model.ErrorMessage = "An error occurred while calculating.";
                return View(model);
            }

            model.ErrorMessage = null;
            return View(model);
        }
    }
}