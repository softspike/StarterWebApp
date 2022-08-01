using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Threading.Tasks;

namespace Starter.Core.Mapping
{
    public class AutoMapSetup
    {
        public void Setup()
        {
            Mapper.Initialize(cfg => cfg.AddMaps(new[]
                    {
                        "Starter.Data"
                    })
            );
        }
    }
}
