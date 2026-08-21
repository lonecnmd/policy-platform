window.POLICY_ANALYSIS = {
  "updatedAt": "2026-08-21",
  "method": "20260819文件夹结构解析 + 文件名元数据抽取 + 项目管理候选任务模板",
  "note": "本版先完成四维度、三级层级和附件体系重建；条款摘录与现行有效性需在后续深度抽取中逐条复核。",
  "architectureUnits": [
    {
      "id": "unit-policy-ledger",
      "name": "政策文件档案",
      "layer": "政策来源层",
      "purpose": "沉淀政策名称、文号、层级、维度、主题和原文附件。"
    },
    {
      "id": "unit-project-decision",
      "name": "投资决策管理",
      "layer": "投资管理层",
      "purpose": "梳理项目谋划、立项、可研、概算和审批评估要求。"
    },
    {
      "id": "unit-fund-plan",
      "name": "资金计划安排",
      "layer": "投资管理层",
      "purpose": "衔接资金来源、年度计划、资金下达和项目库管理。"
    },
    {
      "id": "unit-budget-cycle",
      "name": "预算全周期管理",
      "layer": "预算管理层",
      "purpose": "覆盖预算编制、审查、执行、公开、调整和决算衔接。"
    },
    {
      "id": "unit-performance",
      "name": "预算绩效管理",
      "layer": "预算管理层",
      "purpose": "沉淀绩效目标、运行监控、评价和结果应用要求。"
    },
    {
      "id": "unit-procurement-cycle",
      "name": "采购全流程管理",
      "layer": "采购管理层",
      "purpose": "覆盖需求、意向、方式、公告、评审、合同和验收。"
    },
    {
      "id": "unit-risk-control",
      "name": "合规内控与争议处理",
      "layer": "采购管理层",
      "purpose": "归集公平竞争、质疑投诉、行政处罚和专项整治要求。"
    },
    {
      "id": "unit-asset-ledger",
      "name": "国有资产台账",
      "layer": "资产管理层",
      "purpose": "管理资产配置、登记、使用、处置、报告和监督。"
    },
    {
      "id": "unit-data-asset",
      "name": "数据资产与公共数据运营",
      "layer": "资产管理层",
      "purpose": "梳理数据产权、数据资产、公共数据授权运营和价格管理。"
    },
    {
      "id": "unit-supervision",
      "name": "监督评价闭环",
      "layer": "治理保障层",
      "purpose": "串联监督检查、审计、绩效评价、后评价和整改闭环。"
    }
  ],
  "policyAnalyses": [
    {
      "policyId": "INV-01",
      "policyTitle": "《政府投资条例》（国务院令712号）",
      "docNo": "国务院令712号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《政府投资条例》（国务院令712号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《政府投资条例》（国务院令712号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《政府投资条例》（国务院令712号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《政府投资条例》（国务院令712号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-02",
      "policyTitle": "《国务院关于投资体制改革的决定》（国发〔2004〕20号）",
      "docNo": "国发〔2004〕20号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国务院关于投资体制改革的决定》（国发〔2004〕20号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国务院关于投资体制改革的决定》（国发〔2004〕20号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国务院关于投资体制改革的决定》（国发〔2004〕20号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国务院关于投资体制改革的决定》（国发〔2004〕20号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-03",
      "policyTitle": "《中共中央 国务院关于深化投融资体制改革的意见》（中发〔2016〕18号）",
      "docNo": "中发〔2016〕18号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《中共中央 国务院关于深化投融资体制改革的意见》（中发〔2016〕18号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《中共中央 国务院关于深化投融资体制改革的意见》（中发〔2016〕18号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《中共中央 国务院关于深化投融资体制改革的意见》（中发〔2016〕18号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《中共中央 国务院关于深化投融资体制改革的意见》（中发〔2016〕18号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-04",
      "policyTitle": "《投资项目可行性研究报告编写大纲及说明》（发改投资规〔2023〕304号",
      "docNo": "发改投资规〔2023〕304号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《投资项目可行性研究报告编写大纲及说明》（发改投资规〔2023〕304号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《投资项目可行性研究报告编写大纲及说明》（发改投资规〔2023〕304号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《投资项目可行性研究报告编写大纲及说明》（发改投资规〔2023〕304号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《投资项目可行性研究报告编写大纲及说明》（发改投资规〔2023〕304号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-05",
      "policyTitle": "《国务院办公厅关于深化投资审批制度改革的意见》（国办发〔2026〕13号）",
      "docNo": "国办发〔2026〕13号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国务院办公厅关于深化投资审批制度改革的意见》（国办发〔2026〕13号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国务院办公厅关于深化投资审批制度改革的意见》（国办发〔2026〕13号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国务院办公厅关于深化投资审批制度改革的意见》（国办发〔2026〕13号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国务院办公厅关于深化投资审批制度改革的意见》（国办发〔2026〕13号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-06",
      "policyTitle": "《国家发展改革委投资咨询评估管理办法》（发改投资规〔2022〕632号）",
      "docNo": "发改投资规〔2022〕632号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国家发展改革委投资咨询评估管理办法》（发改投资规〔2022〕632号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国家发展改革委投资咨询评估管理办法》（发改投资规〔2022〕632号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国家发展改革委投资咨询评估管理办法》（发改投资规〔2022〕632号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国家发展改革委投资咨询评估管理办法》（发改投资规〔2022〕632号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-07",
      "policyTitle": "《广东省省级政府投资管理办法》（粤府〔2023〕93号）",
      "docNo": "粤府〔2023〕93号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省省级政府投资管理办法》（粤府〔2023〕93号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省省级政府投资管理办法》（粤府〔2023〕93号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省省级政府投资管理办法》（粤府〔2023〕93号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省省级政府投资管理办法》（粤府〔2023〕93号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-08",
      "policyTitle": "《广东省人民政府办公厅印发广东省关于进一步深化投融资体制改革若干举措的通知》（粤府办〔2025〕8号）",
      "docNo": "粤府办〔2025〕8号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省人民政府办公厅印发广东省关于进一步深化投融资体制改革若干举措的通知》（粤府办〔2025〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省人民政府办公厅印发广东省关于进一步深化投融资体制改革若干举措的通知》（粤府办〔2025〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省人民政府办公厅印发广东省关于进一步深化投融资体制改革若干举措的通知》（粤府办〔2025〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省人民政府办公厅印发广东省关于进一步深化投融资体制改革若干举措的通知》（粤府办〔2025〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-09",
      "policyTitle": "《广东省发展改革委关于对投资项目立项阶段审批事项实行同步办理联合审查的通知》（粤发改规〔2017〕8号）",
      "docNo": "发改规〔2017〕8号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省发展改革委关于对投资项目立项阶段审批事项实行同步办理联合审查的通知》（粤发改规〔2017〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省发展改革委关于对投资项目立项阶段审批事项实行同步办理联合审查的通知》（粤发改规〔2017〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省发展改革委关于对投资项目立项阶段审批事项实行同步办理联合审查的通知》（粤发改规〔2017〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省发展改革委关于对投资项目立项阶段审批事项实行同步办理联合审查的通知》（粤发改规〔2017〕8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-10",
      "policyTitle": "《深圳市政府投资项目策划生成管理办法》（深府规〔2020〕6号）",
      "docNo": "深府规〔2020〕6号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市政府投资项目策划生成管理办法》（深府规〔2020〕6号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市政府投资项目策划生成管理办法》（深府规〔2020〕6号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市政府投资项目策划生成管理办法》（深府规〔2020〕6号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市政府投资项目策划生成管理办法》（深府规〔2020〕6号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-11",
      "policyTitle": "《深圳市2026年政府投资项目计划》",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市2026年政府投资项目计划》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市2026年政府投资项目计划》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市2026年政府投资项目计划》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市2026年政府投资项目计划》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与投资决策制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-12",
      "policyTitle": "《中央预算内投资计划管理办法》发改投资规〔2025〕1728号",
      "docNo": "发改投资规〔2025〕1728号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《中央预算内投资计划管理办法》发改投资规〔2025〕1728号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《中央预算内投资计划管理办法》发改投资规〔2025〕1728号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《中央预算内投资计划管理办法》发改投资规〔2025〕1728号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《中央预算内投资计划管理办法》发改投资规〔2025〕1728号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-13",
      "policyTitle": "《中央预算内直接投资项目管理办法》国家发展和改革委员会令2014年第7号，2023年修订",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《中央预算内直接投资项目管理办法》国家发展和改革委员会令2014年第7号，2023年修订》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《中央预算内直接投资项目管理办法》国家发展和改革委员会令2014年第7号，2023年修订》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《中央预算内直接投资项目管理办法》国家发展和改革委员会令2014年第7号，2023年修订》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《中央预算内直接投资项目管理办法》国家发展和改革委员会令2014年第7号，2023年修订》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-14",
      "policyTitle": "《中央预算内投资资本金注入项目管理办法》国家发改委令第44号 2021年",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《中央预算内投资资本金注入项目管理办法》国家发改委令第44号 2021年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《中央预算内投资资本金注入项目管理办法》国家发改委令第44号 2021年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《中央预算内投资资本金注入项目管理办法》国家发改委令第44号 2021年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《中央预算内投资资本金注入项目管理办法》国家发改委令第44号 2021年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-15",
      "policyTitle": "《关于规范中央预算内投资资金安排方式及项目管理的通知》发改投资规〔2020〕518号2020年",
      "docNo": "发改投资规〔2020〕518号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于规范中央预算内投资资金安排方式及项目管理的通知》发改投资规〔2020〕518号2020年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于规范中央预算内投资资金安排方式及项目管理的通知》发改投资规〔2020〕518号2020年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于规范中央预算内投资资金安排方式及项目管理的通知》发改投资规〔2020〕518号2020年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于规范中央预算内投资资金安排方式及项目管理的通知》发改投资规〔2020〕518号2020年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-16",
      "policyTitle": "《中央预算内投资项目监督管理办法》国家发改委令第10号 2023年",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《中央预算内投资项目监督管理办法》国家发改委令第10号 2023年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《中央预算内投资项目监督管理办法》国家发改委令第10号 2023年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《中央预算内投资项目监督管理办法》国家发改委令第10号 2023年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《中央预算内投资项目监督管理办法》国家发改委令第10号 2023年》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-17",
      "policyTitle": "《国家政务信息化项目建设管理办法》（国办发〔2019〕57号）",
      "docNo": "国办发〔2019〕57号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国家政务信息化项目建设管理办法》（国办发〔2019〕57号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国家政务信息化项目建设管理办法》（国办发〔2019〕57号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国家政务信息化项目建设管理办法》（国办发〔2019〕57号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国家政务信息化项目建设管理办法》（国办发〔2019〕57号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-18",
      "policyTitle": "《广东省人民政府办公厅关于印发广东省省级政务信息化项目管理办法的通知》（粤府办〔2020〕9号）",
      "docNo": "粤府办〔2020〕9号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省人民政府办公厅关于印发广东省省级政务信息化项目管理办法的通知》（粤府办〔2020〕9号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省人民政府办公厅关于印发广东省省级政务信息化项目管理办法的通知》（粤府办〔2020〕9号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省人民政府办公厅关于印发广东省省级政务信息化项目管理办法的通知》（粤府办〔2020〕9号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省人民政府办公厅关于印发广东省省级政务信息化项目管理办法的通知》（粤府办〔2020〕9号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-19",
      "policyTitle": "《广东省省级财政专项资金管理办法》（粤府〔2023〕34号）",
      "docNo": "粤府〔2023〕34号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省省级财政专项资金管理办法》（粤府〔2023〕34号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省省级财政专项资金管理办法》（粤府〔2023〕34号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省省级财政专项资金管理办法》（粤府〔2023〕34号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省省级财政专项资金管理办法》（粤府〔2023〕34号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-20",
      "policyTitle": "《广东省发展改革委关于下达2025年区域协调发展战略专项资金（基建投资及配套）投资计划的通知》（粤发改投资〔2025〕191号）",
      "docNo": "发改投资〔2025〕191号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省发展改革委关于下达2025年区域协调发展战略专项资金（基建投资及配套）投资计划的通知》（粤发改投资〔2025〕191号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省发展改革委关于下达2025年区域协调发展战略专项资金（基建投资及配套）投资计划的通知》（粤发改投资〔2025〕191号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省发展改革委关于下达2025年区域协调发展战略专项资金（基建投资及配套）投资计划的通知》（粤发改投资〔2025〕191号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省发展改革委关于下达2025年区域协调发展战略专项资金（基建投资及配套）投资计划的通知》（粤发改投资〔2025〕191号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-23",
      "policyTitle": "《深圳经济特区政府投资项目管理条例》(2021修订)",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳经济特区政府投资项目管理条例》(2021修订)》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳经济特区政府投资项目管理条例》(2021修订)》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳经济特区政府投资项目管理条例》(2021修订)》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳经济特区政府投资项目管理条例》(2021修订)》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-24",
      "policyTitle": "《北京市政府投资管理办法》（京政发〔2023〕1号）",
      "docNo": "未识别",
      "issuingAuthority": "对标城市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《北京市政府投资管理办法》（京政发〔2023〕1号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《北京市政府投资管理办法》（京政发〔2023〕1号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《北京市政府投资管理办法》（京政发〔2023〕1号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《北京市政府投资管理办法》（京政发〔2023〕1号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-25",
      "policyTitle": "《上海市市级政府投资管理办法》（沪府规（2021）8号）",
      "docNo": "未识别",
      "issuingAuthority": "对标城市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《上海市市级政府投资管理办法》（沪府规（2021）8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《上海市市级政府投资管理办法》（沪府规（2021）8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《上海市市级政府投资管理办法》（沪府规（2021）8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《上海市市级政府投资管理办法》（沪府规（2021）8号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-26",
      "policyTitle": "《关于公布2026年一般国债、特别国债发行有关安排的通知》财办债〔2026〕71号",
      "docNo": "财办债〔2026〕71号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于公布2026年一般国债、特别国债发行有关安排的通知》财办债〔2026〕71号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于公布2026年一般国债、特别国债发行有关安排的通知》财办债〔2026〕71号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于公布2026年一般国债、特别国债发行有关安排的通知》财办债〔2026〕71号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于公布2026年一般国债、特别国债发行有关安排的通知》财办债〔2026〕71号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-27",
      "policyTitle": "《国务院关于印发〈推动大规模设备更新和消费品以旧换新行动方案〉的通知》国发〔2024〕7号",
      "docNo": "国发〔2024〕7号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国务院关于印发〈推动大规模设备更新和消费品以旧换新行动方案〉的通知》国发〔2024〕7号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国务院关于印发〈推动大规模设备更新和消费品以旧换新行动方案〉的通知》国发〔2024〕7号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国务院关于印发〈推动大规模设备更新和消费品以旧换新行动方案〉的通知》国发〔2024〕7号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国务院关于印发〈推动大规模设备更新和消费品以旧换新行动方案〉的通知》国发〔2024〕7号》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-28",
      "policyTitle": "《国务院办公厅关于优化完善地方政府专项债券管理机制的意见》（国办发〔2024〕52号）",
      "docNo": "国办发〔2024〕52号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国务院办公厅关于优化完善地方政府专项债券管理机制的意见》（国办发〔2024〕52号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国务院办公厅关于优化完善地方政府专项债券管理机制的意见》（国办发〔2024〕52号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国务院办公厅关于优化完善地方政府专项债券管理机制的意见》（国办发〔2024〕52号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国务院办公厅关于优化完善地方政府专项债券管理机制的意见》（国办发〔2024〕52号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-29",
      "policyTitle": "《地方政府债券发行管理办法》（财库〔2020〕43号）",
      "docNo": "财库〔2020〕43号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《地方政府债券发行管理办法》（财库〔2020〕43号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《地方政府债券发行管理办法》（财库〔2020〕43号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《地方政府债券发行管理办法》（财库〔2020〕43号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《地方政府债券发行管理办法》（财库〔2020〕43号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-30",
      "policyTitle": "《广东省财政厅关于2026年广东省政府专项债券（二十六期至三十期）发行有关事宜的通知》（粤财债〔2026〕39号）",
      "docNo": "财债〔2026〕39号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《广东省财政厅关于2026年广东省政府专项债券（二十六期至三十期）发行有关事宜的通知》（粤财债〔2026〕39号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《广东省财政厅关于2026年广东省政府专项债券（二十六期至三十期）发行有关事宜的通知》（粤财债〔2026〕39号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《广东省财政厅关于2026年广东省政府专项债券（二十六期至三十期）发行有关事宜的通知》（粤财债〔2026〕39号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《广东省财政厅关于2026年广东省政府专项债券（二十六期至三十期）发行有关事宜的通知》（粤财债〔2026〕39号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-31",
      "policyTitle": "《关于加强政府投资基金布局规划和投向指导的工作办法（试行）》（发改财金规〔2025〕1752号）",
      "docNo": "发改财金规〔2025〕1752号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于加强政府投资基金布局规划和投向指导的工作办法（试行）》（发改财金规〔2025〕1752号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于加强政府投资基金布局规划和投向指导的工作办法（试行）》（发改财金规〔2025〕1752号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于加强政府投资基金布局规划和投向指导的工作办法（试行）》（发改财金规〔2025〕1752号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于加强政府投资基金布局规划和投向指导的工作办法（试行）》（发改财金规〔2025〕1752号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-32",
      "policyTitle": "《关于做好政策性开发性金融工具项目储备和申报工作的通知》（国家发展改革委，2022年）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于做好政策性开发性金融工具项目储备和申报工作的通知》（国家发展改革委，2022年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于做好政策性开发性金融工具项目储备和申报工作的通知》（国家发展改革委，2022年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于做好政策性开发性金融工具项目储备和申报工作的通知》（国家发展改革委，2022年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于做好政策性开发性金融工具项目储备和申报工作的通知》（国家发展改革委，2022年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-33",
      "policyTitle": "《国家发展改革委关于全面推动基础设施领域不动产投资信托基金（REITs）项目常态化发行的通知》（发改投资〔2024〕1014号）",
      "docNo": "发改投资〔2024〕1014号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国家发展改革委关于全面推动基础设施领域不动产投资信托基金（REITs）项目常态化发行的通知》（发改投资〔2024〕1014号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国家发展改革委关于全面推动基础设施领域不动产投资信托基金（REITs）项目常态化发行的通知》（发改投资〔2024〕1014号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国家发展改革委关于全面推动基础设施领域不动产投资信托基金（REITs）项目常态化发行的通知》（发改投资〔2024〕1014号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国家发展改革委关于全面推动基础设施领域不动产投资信托基金（REITs）项目常态化发行的通知》（发改投资〔2024〕1014号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-34",
      "policyTitle": "《关于进一步做好基础设施领域不动产投资信托基金（REITs）常态化申报推荐工作的通知》（发改办投资〔2025〕782号）",
      "docNo": "发改办投资〔2025〕782号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于进一步做好基础设施领域不动产投资信托基金（REITs）常态化申报推荐工作的通知》（发改办投资〔2025〕782号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于进一步做好基础设施领域不动产投资信托基金（REITs）常态化申报推荐工作的通知》（发改办投资〔2025〕782号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于进一步做好基础设施领域不动产投资信托基金（REITs）常态化申报推荐工作的通知》（发改办投资〔2025〕782号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于进一步做好基础设施领域不动产投资信托基金（REITs）常态化申报推荐工作的通知》（发改办投资〔2025〕782号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-35",
      "policyTitle": "《关于支持深圳市基础设施领域不动产投资信托基金（REITs）高质量发展的若干措施》（2023年）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于支持深圳市基础设施领域不动产投资信托基金（REITs）高质量发展的若干措施》（2023年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于支持深圳市基础设施领域不动产投资信托基金（REITs）高质量发展的若干措施》（2023年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于支持深圳市基础设施领域不动产投资信托基金（REITs）高质量发展的若干措施》（2023年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于支持深圳市基础设施领域不动产投资信托基金（REITs）高质量发展的若干措施》（2023年）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-36",
      "policyTitle": "《关于进一步做好社会资本投融资合作对接有关工作的通知》(发改办投资〔2022〕233号)_政府信息公开_政务公开-国家发展改革委",
      "docNo": "发改办投资〔2022〕233号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于进一步做好社会资本投融资合作对接有关工作的通知》(发改办投资〔2022〕233号)_政府信息公开_政务公开-国家发展改革委》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于进一步做好社会资本投融资合作对接有关工作的通知》(发改办投资〔2022〕233号)_政府信息公开_政务公开-国家发展改革委》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于进一步做好社会资本投融资合作对接有关工作的通知》(发改办投资〔2022〕233号)_政府信息公开_政务公开-国家发展改革委》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于进一步做好社会资本投融资合作对接有关工作的通知》(发改办投资〔2022〕233号)_政府信息公开_政务公开-国家发展改革委》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-37",
      "policyTitle": "《关于高质量发展资本市场助力广东现代化建设的若干措施》（粤府函〔2025〕7号）",
      "docNo": "粤府函〔2025〕7号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《关于高质量发展资本市场助力广东现代化建设的若干措施》（粤府函〔2025〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《关于高质量发展资本市场助力广东现代化建设的若干措施》（粤府函〔2025〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《关于高质量发展资本市场助力广东现代化建设的若干措施》（粤府函〔2025〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《关于高质量发展资本市场助力广东现代化建设的若干措施》（粤府函〔2025〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-38",
      "policyTitle": "《深圳市社会投资项目备案办法》（深府（2014）81号）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市社会投资项目备案办法》（深府（2014）81号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市社会投资项目备案办法》（深府（2014）81号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市社会投资项目备案办法》（深府（2014）81号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市社会投资项目备案办法》（深府（2014）81号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-39",
      "policyTitle": "《深圳市社会投资建设项目报建登记实施办法》",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市社会投资建设项目报建登记实施办法》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市社会投资建设项目报建登记实施办法》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市社会投资建设项目报建登记实施办法》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市社会投资建设项目报建登记实施办法》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-40",
      "policyTitle": "《深圳市促进创业投资高质量发展行动方案（2024-2026）》（公开征求意见稿）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市促进创业投资高质量发展行动方案（2024-2026）》（公开征求意见稿）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市促进创业投资高质量发展行动方案（2024-2026）》（公开征求意见稿）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市促进创业投资高质量发展行动方案（2024-2026）》（公开征求意见稿）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市促进创业投资高质量发展行动方案（2024-2026）》（公开征求意见稿）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与资金安排制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-41",
      "policyTitle": "《全国投资项目在线审批监管平台运行管理暂行办法》（国家发展改革委等18部门令第3号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《全国投资项目在线审批监管平台运行管理暂行办法》（国家发展改革委等18部门令第3号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《全国投资项目在线审批监管平台运行管理暂行办法》（国家发展改革委等18部门令第3号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《全国投资项目在线审批监管平台运行管理暂行办法》（国家发展改革委等18部门令第3号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《全国投资项目在线审批监管平台运行管理暂行办法》（国家发展改革委等18部门令第3号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-42",
      "policyTitle": "《国家发展改革委重大项目后评价管理办法》（发改评督规〔2024〕1103号）",
      "docNo": "发改评督规〔2024〕1103号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《国家发展改革委重大项目后评价管理办法》（发改评督规〔2024〕1103号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《国家发展改革委重大项目后评价管理办法》（发改评督规〔2024〕1103号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《国家发展改革委重大项目后评价管理办法》（发改评督规〔2024〕1103号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《国家发展改革委重大项目后评价管理办法》（发改评督规〔2024〕1103号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-44",
      "policyTitle": "《深圳市政府投资项目后评价管理办法》（深发改规〔2023〕11号）",
      "docNo": "发改规〔2023〕11号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市政府投资项目后评价管理办法》（深发改规〔2023〕11号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市政府投资项目后评价管理办法》（深发改规〔2023〕11号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市政府投资项目后评价管理办法》（深发改规〔2023〕11号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市政府投资项目后评价管理办法》（深发改规〔2023〕11号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "INV-45",
      "policyTitle": "《深圳市发展和改革委员会中央预算内投资项目事中事后监督管理暂行办法》（深发改规〔2022〕7号）",
      "docNo": "发改规〔2022〕7号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "发展改革部门",
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "项目谋划储备",
        "决策审批评估",
        "计划和资金安排",
        "实施监管评价"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "项目谋划储备",
          "action": "形成项目清单、建设必要性、资金来源和前期工作成熟度判断。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "决策审批评估",
          "action": "按政策要求开展立项、可研、概算、咨询评估或备案核准。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "计划和资金安排",
          "action": "衔接年度投资计划、预算安排、债券或其他资金渠道。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "实施监管评价",
          "action": "开展在线监测、监督检查、绩效评价和后评价闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立项目政策依据档案",
          "description": "围绕《深圳市发展和改革委员会中央预算内投资项目事中事后监督管理暂行办法》（深发改规〔2022〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "梳理项目申报与审批要件",
          "description": "围绕《深圳市发展和改革委员会中央预算内投资项目事中事后监督管理暂行办法》（深发改规〔2022〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "衔接资金计划和项目库",
          "description": "围绕《深圳市发展和改革委员会中央预算内投资项目事中事后监督管理暂行办法》（深发改规〔2022〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实监督检查和后评价",
          "description": "围绕《深圳市发展和改革委员会中央预算内投资项目事中事后监督管理暂行办法》（深发改规〔2022〕7号）》在投资管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-project-decision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-fund-plan",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "投资管理政策与监督评价制度主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-project-decision",
          "unitName": "unit-project-decision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-fund-plan",
          "unitName": "unit-fund-plan",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入投资管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-01",
      "policyTitle": "《中华人民共和国预算法》（主席令第21号，2018修正）",
      "docNo": "主席令第21号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《中华人民共和国预算法》（主席令第21号，2018修正）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《中华人民共和国预算法》（主席令第21号，2018修正）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《中华人民共和国预算法》（主席令第21号，2018修正）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《中华人民共和国预算法》（主席令第21号，2018修正）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-02",
      "policyTitle": "《中华人民共和国预算法实施条例》（中华人民共和国国务院令第729号）202β",
      "docNo": "国务院令第729号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《中华人民共和国预算法实施条例》（中华人民共和国国务院令第729号）202β》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《中华人民共和国预算法实施条例》（中华人民共和国国务院令第729号）202β》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《中华人民共和国预算法实施条例》（中华人民共和国国务院令第729号）202β》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《中华人民共和国预算法实施条例》（中华人民共和国国务院令第729号）202β》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-03",
      "policyTitle": "《国务院关于进一步深化预算管理制度改革的意见》（国发（2021）5号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《国务院关于进一步深化预算管理制度改革的意见》（国发（2021）5号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《国务院关于进一步深化预算管理制度改革的意见》（国发（2021）5号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《国务院关于进一步深化预算管理制度改革的意见》（国发（2021）5号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《国务院关于进一步深化预算管理制度改革的意见》（国发（2021）5号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-04",
      "policyTitle": "《关于进一步推进预算公开工作的指导意见》中办发〔2016）13号",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《关于进一步推进预算公开工作的指导意见》中办发〔2016）13号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《关于进一步推进预算公开工作的指导意见》中办发〔2016）13号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《关于进一步推进预算公开工作的指导意见》中办发〔2016）13号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《关于进一步推进预算公开工作的指导意见》中办发〔2016）13号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-05",
      "policyTitle": "《中共中央、国务院关于全面实施预算绩效管理的意见》（中发〔2018〕34号）",
      "docNo": "中发〔2018〕34号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《中共中央、国务院关于全面实施预算绩效管理的意见》（中发〔2018〕34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《中共中央、国务院关于全面实施预算绩效管理的意见》（中发〔2018〕34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《中共中央、国务院关于全面实施预算绩效管理的意见》（中发〔2018〕34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《中共中央、国务院关于全面实施预算绩效管理的意见》（中发〔2018〕34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-06",
      "policyTitle": "《中央本级基本支出预算管理办法》（财预〔2007）37号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《中央本级基本支出预算管理办法》（财预〔2007）37号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《中央本级基本支出预算管理办法》（财预〔2007）37号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《中央本级基本支出预算管理办法》（财预〔2007）37号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《中央本级基本支出预算管理办法》（财预〔2007）37号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-07",
      "policyTitle": "《中央本级项目支出预算管理办法》（财预〔2007）38号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《中央本级项目支出预算管理办法》（财预〔2007）38号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《中央本级项目支出预算管理办法》（财预〔2007）38号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《中央本级项目支出预算管理办法》（财预〔2007）38号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《中央本级项目支出预算管理办法》（财预〔2007）38号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-08",
      "policyTitle": "《全国人民代表大会常务委员会关于加强中央预算审查监督的决定》（2021修订）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《全国人民代表大会常务委员会关于加强中央预算审查监督的决定》（2021修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《全国人民代表大会常务委员会关于加强中央预算审查监督的决定》（2021修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《全国人民代表大会常务委员会关于加强中央预算审查监督的决定》（2021修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《全国人民代表大会常务委员会关于加强中央预算审查监督的决定》（2021修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-09",
      "policyTitle": "《国务院关于进一步完善国有资本经营预算制度的意见》（国发（2024）2号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《国务院关于进一步完善国有资本经营预算制度的意见》（国发（2024）2号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《国务院关于进一步完善国有资本经营预算制度的意见》（国发（2024）2号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《国务院关于进一步完善国有资本经营预算制度的意见》（国发（2024）2号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《国务院关于进一步完善国有资本经营预算制度的意见》（国发（2024）2号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-10",
      "policyTitle": "《财政部关于推进预算绩效管理的指导意见》（财预〔2011）416号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《财政部关于推进预算绩效管理的指导意见》（财预〔2011）416号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《财政部关于推进预算绩效管理的指导意见》（财预〔2011）416号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《财政部关于推进预算绩效管理的指导意见》（财预〔2011）416号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《财政部关于推进预算绩效管理的指导意见》（财预〔2011）416号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-11",
      "policyTitle": "《关于印发预算评审管理暂行办法的通知》（财预（2023）95号）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《关于印发预算评审管理暂行办法的通知》（财预（2023）95号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《关于印发预算评审管理暂行办法的通知》（财预（2023）95号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《关于印发预算评审管理暂行办法的通知》（财预（2023）95号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《关于印发预算评审管理暂行办法的通知》（财预（2023）95号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-12",
      "policyTitle": "《广东省预算审批监督条例》（广东省第十三届人民代表大会常务委员会公告第47号2019年修订）",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《广东省预算审批监督条例》（广东省第十三届人民代表大会常务委员会公告第47号2019年修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《广东省预算审批监督条例》（广东省第十三届人民代表大会常务委员会公告第47号2019年修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《广东省预算审批监督条例》（广东省第十三届人民代表大会常务委员会公告第47号2019年修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《广东省预算审批监督条例》（广东省第十三届人民代表大会常务委员会公告第47号2019年修订）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-13",
      "policyTitle": "《广东省省级财政预算绩效目标管理办法（试行）》（粤财绩〔2019〕11号）",
      "docNo": "财绩〔2019〕11号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《广东省省级财政预算绩效目标管理办法（试行）》（粤财绩〔2019〕11号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《广东省省级财政预算绩效目标管理办法（试行）》（粤财绩〔2019〕11号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《广东省省级财政预算绩效目标管理办法（试行）》（粤财绩〔2019〕11号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《广东省省级财政预算绩效目标管理办法（试行）》（粤财绩〔2019〕11号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-14",
      "policyTitle": "《广东省人民政府关于加强统筹进一步深化预算管理制度改革的实施意见》粤府〔2021）34号",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《广东省人民政府关于加强统筹进一步深化预算管理制度改革的实施意见》粤府〔2021）34号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《广东省人民政府关于加强统筹进一步深化预算管理制度改革的实施意见》粤府〔2021）34号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《广东省人民政府关于加强统筹进一步深化预算管理制度改革的实施意见》粤府〔2021）34号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《广东省人民政府关于加强统筹进一步深化预算管理制度改革的实施意见》粤府〔2021）34号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-15",
      "policyTitle": "《广东省财政厅印发《关于深化预算管理制度改革的实施方案》的通知》粤财预（2021）65号",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《广东省财政厅印发《关于深化预算管理制度改革的实施方案》的通知》粤财预（2021）65号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《广东省财政厅印发《关于深化预算管理制度改革的实施方案》的通知》粤财预（2021）65号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《广东省财政厅印发《关于深化预算管理制度改革的实施方案》的通知》粤财预（2021）65号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《广东省财政厅印发《关于深化预算管理制度改革的实施方案》的通知》粤财预（2021）65号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-16",
      "policyTitle": "《关于印发广东省财政预算绩效指标库和广东省财政预算绩效指标库管理暂行办法的通知》（粤财绩〔2018〕3号）",
      "docNo": "财绩〔2018〕3号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《关于印发广东省财政预算绩效指标库和广东省财政预算绩效指标库管理暂行办法的通知》（粤财绩〔2018〕3号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《关于印发广东省财政预算绩效指标库和广东省财政预算绩效指标库管理暂行办法的通知》（粤财绩〔2018〕3号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《关于印发广东省财政预算绩效指标库和广东省财政预算绩效指标库管理暂行办法的通知》（粤财绩〔2018〕3号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《关于印发广东省财政预算绩效指标库和广东省财政预算绩效指标库管理暂行办法的通知》（粤财绩〔2018〕3号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-17",
      "policyTitle": "《广东省人民政府办公厅关于印发广东省进一步推进省以下财政体制改革工作实施方案的通知》（粤府办〔2022）34号）",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《广东省人民政府办公厅关于印发广东省进一步推进省以下财政体制改革工作实施方案的通知》（粤府办〔2022）34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《广东省人民政府办公厅关于印发广东省进一步推进省以下财政体制改革工作实施方案的通知》（粤府办〔2022）34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《广东省人民政府办公厅关于印发广东省进一步推进省以下财政体制改革工作实施方案的通知》（粤府办〔2022）34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《广东省人民政府办公厅关于印发广东省进一步推进省以下财政体制改革工作实施方案的通知》（粤府办〔2022）34号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-18",
      "policyTitle": "《深圳市本级部门预算准则（试行）》的通知深府〔2006）12号",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《深圳市本级部门预算准则（试行）》的通知深府〔2006）12号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《深圳市本级部门预算准则（试行）》的通知深府〔2006）12号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《深圳市本级部门预算准则（试行）》的通知深府〔2006）12号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《深圳市本级部门预算准则（试行）》的通知深府〔2006）12号》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-19",
      "policyTitle": "《深圳市人民政府关于加强财政预算绩效管理工作的意见》（深府（2013）23号）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《深圳市人民政府关于加强财政预算绩效管理工作的意见》（深府（2013）23号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《深圳市人民政府关于加强财政预算绩效管理工作的意见》（深府（2013）23号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《深圳市人民政府关于加强财政预算绩效管理工作的意见》（深府（2013）23号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《深圳市人民政府关于加强财政预算绩效管理工作的意见》（深府（2013）23号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "BUD-20",
      "policyTitle": "《深圳市人民代表大会常务委员会关于加强市级预算审查监督的决定》（深圳市第七届人大常委会公告第八十三号）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "预算编制",
        "审查评审",
        "执行公开",
        "绩效监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "预算编制",
          "action": "明确支出范围、项目入库、绩效目标和预算申报材料。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "审查评审",
          "action": "开展预算审核、人大审查、财政评审或绩效目标审核。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "执行公开",
          "action": "推进预算批复、执行监控、预算公开和调整管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "绩效监督",
          "action": "形成绩效运行监控、评价结果应用和整改闭环。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "梳理预算编制依据",
          "description": "围绕《深圳市人民代表大会常务委员会关于加强市级预算审查监督的决定》（深圳市第七届人大常委会公告第八十三号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善绩效目标和预算评审",
          "description": "围绕《深圳市人民代表大会常务委员会关于加强市级预算审查监督的决定》（深圳市第七届人大常委会公告第八十三号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "跟踪预算执行与公开",
          "description": "围绕《深圳市人民代表大会常务委员会关于加强市级预算审查监督的决定》（深圳市第七届人大常委会公告第八十三号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "形成评价结果应用清单",
          "description": "围绕《深圳市人民代表大会常务委员会关于加强市级预算审查监督的决定》（深圳市第七届人大常委会公告第八十三号）》在预算管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-budget-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-performance",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "预算管理政策与预算政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-budget-cycle",
          "unitName": "unit-budget-cycle",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-performance",
          "unitName": "unit-performance",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入预算管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-21",
      "policyTitle": "《中华人民共和国政府采购法》（主席令第68号，2014修正）",
      "docNo": "主席令第68号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《中华人民共和国政府采购法》（主席令第68号，2014修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《中华人民共和国政府采购法》（主席令第68号，2014修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《中华人民共和国政府采购法》（主席令第68号，2014修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《中华人民共和国政府采购法》（主席令第68号，2014修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-22",
      "policyTitle": "《中华人民共和国政府采购法实施条例》（中华人民共和国国务院令第658号，2015）",
      "docNo": "国务院令第658号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《中华人民共和国政府采购法实施条例》（中华人民共和国国务院令第658号，2015）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《中华人民共和国政府采购法实施条例》（中华人民共和国国务院令第658号，2015）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《中华人民共和国政府采购法实施条例》（中华人民共和国国务院令第658号，2015）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《中华人民共和国政府采购法实施条例》（中华人民共和国国务院令第658号，2015）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-23",
      "policyTitle": "《政府采购信息发布管理办法》（财政部令第101号，2020)",
      "docNo": "财政部令第101号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购信息发布管理办法》（财政部令第101号，2020)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购信息发布管理办法》（财政部令第101号，2020)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购信息发布管理办法》（财政部令第101号，2020)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购信息发布管理办法》（财政部令第101号，2020)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-24",
      "policyTitle": "《政府购买服务管理办法》（财政部令第102号，2020）",
      "docNo": "财政部令第102号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府购买服务管理办法》（财政部令第102号，2020）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府购买服务管理办法》（财政部令第102号，2020）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府购买服务管理办法》（财政部令第102号，2020）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府购买服务管理办法》（财政部令第102号，2020）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-25",
      "policyTitle": "《政府采购非招标采购方式管理办法》（财政部令第74号，2014）",
      "docNo": "财政部令第74号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购非招标采购方式管理办法》（财政部令第74号，2014）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购非招标采购方式管理办法》（财政部令第74号，2014）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购非招标采购方式管理办法》（财政部令第74号，2014）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购非招标采购方式管理办法》（财政部令第74号，2014）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-26",
      "policyTitle": "《政府采购货物和服务招标投标管理办法》（财政部令第87号，2017)",
      "docNo": "财政部令第87号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购货物和服务招标投标管理办法》（财政部令第87号，2017)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购货物和服务招标投标管理办法》（财政部令第87号，2017)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购货物和服务招标投标管理办法》（财政部令第87号，2017)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购货物和服务招标投标管理办法》（财政部令第87号，2017)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-27",
      "policyTitle": "《政府采购需求管理办法》（财库〔2021〕22号）",
      "docNo": "财库〔2021〕22号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购需求管理办法》（财库〔2021〕22号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购需求管理办法》（财库〔2021〕22号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购需求管理办法》（财库〔2021〕22号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购需求管理办法》（财库〔2021〕22号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-28",
      "policyTitle": "《政府采购质疑和投诉办法》（财政部令第94号，2018）",
      "docNo": "财政部令第94号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购质疑和投诉办法》（财政部令第94号，2018）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购质疑和投诉办法》（财政部令第94号，2018）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购质疑和投诉办法》（财政部令第94号，2018）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购质疑和投诉办法》（财政部令第94号，2018）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-29",
      "policyTitle": "《政府采购框架协议采购方式管理暂行办法》（财政部令第110号，2022）",
      "docNo": "财政部令第110号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购框架协议采购方式管理暂行办法》（财政部令第110号，2022）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购框架协议采购方式管理暂行办法》（财政部令第110号，2022）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购框架协议采购方式管理暂行办法》（财政部令第110号，2022）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购框架协议采购方式管理暂行办法》（财政部令第110号，2022）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-30",
      "policyTitle": "《关于开展政府采购意向公开工作的通知》（财库〔2020〕10号）",
      "docNo": "财库〔2020〕10号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《关于开展政府采购意向公开工作的通知》（财库〔2020〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《关于开展政府采购意向公开工作的通知》（财库〔2020〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《关于开展政府采购意向公开工作的通知》（财库〔2020〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《关于开展政府采购意向公开工作的通知》（财库〔2020〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-31",
      "policyTitle": "《政府采购领域“整顿市场秩序、建设法规体系、促进产业发展”三年行动方案（2024-2026年)》的通知（国办发〔2024〕33号）",
      "docNo": "国办发〔2024〕33号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《政府采购领域“整顿市场秩序、建设法规体系、促进产业发展”三年行动方案（2024-2026年)》的通知（国办发〔2024〕33号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《政府采购领域“整顿市场秩序、建设法规体系、促进产业发展”三年行动方案（2024-2026年)》的通知（国办发〔2024〕33号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《政府采购领域“整顿市场秩序、建设法规体系、促进产业发展”三年行动方案（2024-2026年)》的通知（国办发〔2024〕33号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《政府采购领域“整顿市场秩序、建设法规体系、促进产业发展”三年行动方案（2024-2026年)》的通知（国办发〔2024〕33号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-32",
      "policyTitle": "《财政部关于印发政府采购合作创新采购方式管理暂行办法的通知》（财库〔2024〕13号）",
      "docNo": "财库〔2024〕13号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《财政部关于印发政府采购合作创新采购方式管理暂行办法的通知》（财库〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《财政部关于印发政府采购合作创新采购方式管理暂行办法的通知》（财库〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《财政部关于印发政府采购合作创新采购方式管理暂行办法的通知》（财库〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《财政部关于印发政府采购合作创新采购方式管理暂行办法的通知》（财库〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-33",
      "policyTitle": "《财政部关于促进政府采购公平竞争优化营商环境的通知》（财库〔2019〕38号）",
      "docNo": "财库〔2019〕38号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《财政部关于促进政府采购公平竞争优化营商环境的通知》（财库〔2019〕38号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《财政部关于促进政府采购公平竞争优化营商环境的通知》（财库〔2019〕38号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《财政部关于促进政府采购公平竞争优化营商环境的通知》（财库〔2019〕38号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《财政部关于促进政府采购公平竞争优化营商环境的通知》（财库〔2019〕38号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-34",
      "policyTitle": "《财政部关于做好政府采购框架协议采购工作有关问题的通知》（财库〔2022〕17号）",
      "docNo": "财库〔2022〕17号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《财政部关于做好政府采购框架协议采购工作有关问题的通知》（财库〔2022〕17号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《财政部关于做好政府采购框架协议采购工作有关问题的通知》（财库〔2022〕17号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《财政部关于做好政府采购框架协议采购工作有关问题的通知》（财库〔2022〕17号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《财政部关于做好政府采购框架协议采购工作有关问题的通知》（财库〔2022〕17号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-35",
      "policyTitle": "《关于加强政府采购活动内部控制管理的指导意见》（财库〔2016〕99号）",
      "docNo": "财库〔2016〕99号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《关于加强政府采购活动内部控制管理的指导意见》（财库〔2016〕99号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《关于加强政府采购活动内部控制管理的指导意见》（财库〔2016〕99号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《关于加强政府采购活动内部控制管理的指导意见》（财库〔2016〕99号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《关于加强政府采购活动内部控制管理的指导意见》（财库〔2016〕99号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-36",
      "policyTitle": "《关于进一步加强政府采购需求和履约验收管理的指导意见》（财库〔2016〕205号）",
      "docNo": "财库〔2016〕205号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《关于进一步加强政府采购需求和履约验收管理的指导意见》（财库〔2016〕205号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《关于进一步加强政府采购需求和履约验收管理的指导意见》（财库〔2016〕205号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《关于进一步加强政府采购需求和履约验收管理的指导意见》（财库〔2016〕205号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《关于进一步加强政府采购需求和履约验收管理的指导意见》（财库〔2016〕205号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-37",
      "policyTitle": "《广东省财政厅关于开展政府采购意向公开有关事项的通知》（粤财采购〔2020〕5号）",
      "docNo": "财采购〔2020〕5号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《广东省财政厅关于开展政府采购意向公开有关事项的通知》（粤财采购〔2020〕5号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《广东省财政厅关于开展政府采购意向公开有关事项的通知》（粤财采购〔2020〕5号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《广东省财政厅关于开展政府采购意向公开有关事项的通知》（粤财采购〔2020〕5号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《广东省财政厅关于开展政府采购意向公开有关事项的通知》（粤财采购〔2020〕5号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-38",
      "policyTitle": "《关于印发省直机关政府购买服务信息公开管理暂行办法的通知》（粤财行〔2019〕10号）",
      "docNo": "财行〔2019〕10号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "广东省有关主管部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《关于印发省直机关政府购买服务信息公开管理暂行办法的通知》（粤财行〔2019〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《关于印发省直机关政府购买服务信息公开管理暂行办法的通知》（粤财行〔2019〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《关于印发省直机关政府购买服务信息公开管理暂行办法的通知》（粤财行〔2019〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《关于印发省直机关政府购买服务信息公开管理暂行办法的通知》（粤财行〔2019〕10号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-39",
      "policyTitle": "《广东省财政厅关于印发广东省政务信息化项目政府采购工作指引的通知》（粤财采购〔2024〕13号）",
      "docNo": "财采购〔2024〕13号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《广东省财政厅关于印发广东省政务信息化项目政府采购工作指引的通知》（粤财采购〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《广东省财政厅关于印发广东省政务信息化项目政府采购工作指引的通知》（粤财采购〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《广东省财政厅关于印发广东省政务信息化项目政府采购工作指引的通知》（粤财采购〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《广东省财政厅关于印发广东省政务信息化项目政府采购工作指引的通知》（粤财采购〔2024〕13号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-40",
      "policyTitle": "《深圳经济特区政府采购条例》（2019修正）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳经济特区政府采购条例》（2019修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳经济特区政府采购条例》（2019修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳经济特区政府采购条例》（2019修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳经济特区政府采购条例》（2019修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-41",
      "policyTitle": "《深圳经济特区政府采购条例实施细则》（深圳市人民政府令第342号，2022修正）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳经济特区政府采购条例实施细则》（深圳市人民政府令第342号，2022修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳经济特区政府采购条例实施细则》（深圳市人民政府令第342号，2022修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳经济特区政府采购条例实施细则》（深圳市人民政府令第342号，2022修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳经济特区政府采购条例实施细则》（深圳市人民政府令第342号，2022修正）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-42",
      "policyTitle": "《深圳市财政局关于印发深圳市政府采购行政处罚裁量权实施办法的通知》（深财规〔2022〕2号）",
      "docNo": "财规〔2022〕2号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳市财政局关于印发深圳市政府采购行政处罚裁量权实施办法的通知》（深财规〔2022〕2号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳市财政局关于印发深圳市政府采购行政处罚裁量权实施办法的通知》（深财规〔2022〕2号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳市财政局关于印发深圳市政府采购行政处罚裁量权实施办法的通知》（深财规〔2022〕2号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳市财政局关于印发深圳市政府采购行政处罚裁量权实施办法的通知》（深财规〔2022〕2号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-43",
      "policyTitle": "《深圳市财政局关于进一步提高政府采购透明度提升采购效率的通知》（深财购〔2024〕32号）",
      "docNo": "财购〔2024〕32号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳市财政局关于进一步提高政府采购透明度提升采购效率的通知》（深财购〔2024〕32号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳市财政局关于进一步提高政府采购透明度提升采购效率的通知》（深财购〔2024〕32号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳市财政局关于进一步提高政府采购透明度提升采购效率的通知》（深财购〔2024〕32号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳市财政局关于进一步提高政府采购透明度提升采购效率的通知》（深财购〔2024〕32号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-44",
      "policyTitle": "《深圳市财政局关于进一步优化政府采购营商环境的通知》（深财购〔2021〕31号）",
      "docNo": "财购〔2021〕31号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳市财政局关于进一步优化政府采购营商环境的通知》（深财购〔2021〕31号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳市财政局关于进一步优化政府采购营商环境的通知》（深财购〔2021〕31号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳市财政局关于进一步优化政府采购营商环境的通知》（深财购〔2021〕31号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳市财政局关于进一步优化政府采购营商环境的通知》（深财购〔2021〕31号）》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-45",
      "policyTitle": "《深圳市财政局深圳市公安局深圳市市场监管局关于开展2025年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2025〕 31 号)",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "市场监管部门",
        "公安部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2025年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2025〕 31 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2025年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2025〕 31 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2025年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2025〕 31 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2025年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2025〕 31 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "PUR-46",
      "policyTitle": "《深圳市财政局深圳市公安局深圳市市场监管局关于开展2026年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2026〕 34 号)",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "市场监管部门",
        "公安部门",
        "项目单位"
      ],
      "implementationFlow": [
        "需求管理",
        "采购实施",
        "履约验收",
        "争议监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "需求管理",
          "action": "明确采购需求、采购预算、采购意向和内部控制要求。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "采购实施",
          "action": "选择采购方式，组织公告、评审、成交和合同签订。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "履约验收",
          "action": "落实合同履约、验收、付款、信息公开和档案管理。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "争议监督",
          "action": "处理质疑投诉、行政处罚、公平竞争和专项整治事项。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "规范采购需求和采购意向",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2026年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2026〕 34 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "匹配采购方式与程序",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2026年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2026〕 34 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "落实履约验收和信息公开",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2026年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2026〕 34 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善质疑投诉和内控监督",
          "description": "围绕《深圳市财政局深圳市公安局深圳市市场监管局关于开展2026年政府采购领域“四类”违法违规行为专项整治工作的通知》（深财购[2026〕 34 号)》在采购管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-procurement-cycle",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-risk-control",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "采购管理政策与采购政策主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-procurement-cycle",
          "unitName": "unit-procurement-cycle",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-risk-control",
          "unitName": "unit-risk-control",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入采购管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-47",
      "policyTitle": "《行政事业性国有资产管理条例》（国务院令第738号，2021）",
      "docNo": "国务院令第738号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《行政事业性国有资产管理条例》（国务院令第738号，2021）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《行政事业性国有资产管理条例》（国务院令第738号，2021）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《行政事业性国有资产管理条例》（国务院令第738号，2021）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《行政事业性国有资产管理条例》（国务院令第738号，2021）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-48",
      "policyTitle": "《中央行政事业单位国有资产使用管理办法》（财资〔2024〕116号）",
      "docNo": "财资〔2024〕116号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《中央行政事业单位国有资产使用管理办法》（财资〔2024〕116号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《中央行政事业单位国有资产使用管理办法》（财资〔2024〕116号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《中央行政事业单位国有资产使用管理办法》（财资〔2024〕116号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《中央行政事业单位国有资产使用管理办法》（财资〔2024〕116号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-49",
      "policyTitle": "《数据产权登记工作指引（试行）》国数综政策〔2026〕35号",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《数据产权登记工作指引（试行）》国数综政策〔2026〕35号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《数据产权登记工作指引（试行）》国数综政策〔2026〕35号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《数据产权登记工作指引（试行）》国数综政策〔2026〕35号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《数据产权登记工作指引（试行）》国数综政策〔2026〕35号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-50",
      "policyTitle": "《全国人民代表大会常务委员会关于加强国有资产管理情况监督的决定》（2020年第十三届全国人大常务委员会第二十四次会议通过)",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《全国人民代表大会常务委员会关于加强国有资产管理情况监督的决定》（2020年第十三届全国人大常务委员会第二十四次会议通过)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《全国人民代表大会常务委员会关于加强国有资产管理情况监督的决定》（2020年第十三届全国人大常务委员会第二十四次会议通过)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《全国人民代表大会常务委员会关于加强国有资产管理情况监督的决定》（2020年第十三届全国人大常务委员会第二十四次会议通过)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《全国人民代表大会常务委员会关于加强国有资产管理情况监督的决定》（2020年第十三届全国人大常务委员会第二十四次会议通过)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-51",
      "policyTitle": "《关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》财资〔2024〕155号",
      "docNo": "财资〔2024〕155号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》财资〔2024〕155号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》财资〔2024〕155号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》财资〔2024〕155号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》财资〔2024〕155号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-52",
      "policyTitle": "《关于印发国有资产报告编报工作暂行办法的通知》财资〔2021〕123号",
      "docNo": "财资〔2021〕123号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于印发国有资产报告编报工作暂行办法的通知》财资〔2021〕123号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于印发国有资产报告编报工作暂行办法的通知》财资〔2021〕123号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于印发国有资产报告编报工作暂行办法的通知》财资〔2021〕123号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于印发国有资产报告编报工作暂行办法的通知》财资〔2021〕123号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-53",
      "policyTitle": "《关于印发行政事业单位国有资产年度报告管理办法的通知》财资[2017]3号",
      "docNo": "财资[2017]3号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于印发行政事业单位国有资产年度报告管理办法的通知》财资[2017]3号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于印发行政事业单位国有资产年度报告管理办法的通知》财资[2017]3号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于印发行政事业单位国有资产年度报告管理办法的通知》财资[2017]3号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于印发行政事业单位国有资产年度报告管理办法的通知》财资[2017]3号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-54",
      "policyTitle": "《财政部关于修改事业单位国有资产管理暂行办法的决定》（财政部令第100号）",
      "docNo": "财政部令第100号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《财政部关于修改事业单位国有资产管理暂行办法的决定》（财政部令第100号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《财政部关于修改事业单位国有资产管理暂行办法的决定》（财政部令第100号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《财政部关于修改事业单位国有资产管理暂行办法的决定》（财政部令第100号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《财政部关于修改事业单位国有资产管理暂行办法的决定》（财政部令第100号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-55",
      "policyTitle": "《中央行政事业单位国有资产配置管理办法》（财资〔2018〕98号）",
      "docNo": "财资〔2018〕98号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《中央行政事业单位国有资产配置管理办法》（财资〔2018〕98号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《中央行政事业单位国有资产配置管理办法》（财资〔2018〕98号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《中央行政事业单位国有资产配置管理办法》（财资〔2018〕98号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《中央行政事业单位国有资产配置管理办法》（财资〔2018〕98号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-56",
      "policyTitle": "《中央行政事业单位国有资产处置管理办法》（财资〔2021〕127号）",
      "docNo": "财资〔2021〕127号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《中央行政事业单位国有资产处置管理办法》（财资〔2021〕127号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《中央行政事业单位国有资产处置管理办法》（财资〔2021〕127号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《中央行政事业单位国有资产处置管理办法》（财资〔2021〕127号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《中央行政事业单位国有资产处置管理办法》（财资〔2021〕127号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-57",
      "policyTitle": "《关于盘活行政事业单位国有资产的指导意见》（财资〔2022〕124号）",
      "docNo": "财资〔2022〕124号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于盘活行政事业单位国有资产的指导意见》（财资〔2022〕124号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于盘活行政事业单位国有资产的指导意见》（财资〔2022〕124号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于盘活行政事业单位国有资产的指导意见》（财资〔2022〕124号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于盘活行政事业单位国有资产的指导意见》（财资〔2022〕124号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-58",
      "policyTitle": "《国务院办公厅关于进一步盘活存量资产扩大有效投资的意见》（国办发〔2022〕19号）",
      "docNo": "国办发〔2022〕19号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《国务院办公厅关于进一步盘活存量资产扩大有效投资的意见》（国办发〔2022〕19号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《国务院办公厅关于进一步盘活存量资产扩大有效投资的意见》（国办发〔2022〕19号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《国务院办公厅关于进一步盘活存量资产扩大有效投资的意见》（国办发〔2022〕19号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《国务院办公厅关于进一步盘活存量资产扩大有效投资的意见》（国办发〔2022〕19号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-59",
      "policyTitle": "《中共中央国务院关于构建数据基础制度更好发挥数据要素作用的意见》（2022年12月2日）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《中共中央国务院关于构建数据基础制度更好发挥数据要素作用的意见》（2022年12月2日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《中共中央国务院关于构建数据基础制度更好发挥数据要素作用的意见》（2022年12月2日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《中共中央国务院关于构建数据基础制度更好发挥数据要素作用的意见》（2022年12月2日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《中共中央国务院关于构建数据基础制度更好发挥数据要素作用的意见》（2022年12月2日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-60",
      "policyTitle": "《中共中央办公厅国务院办公厅关于加快公共数据资源开发利用的意见》（2024年9月21日）",
      "docNo": "未识别",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《中共中央办公厅国务院办公厅关于加快公共数据资源开发利用的意见》（2024年9月21日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《中共中央办公厅国务院办公厅关于加快公共数据资源开发利用的意见》（2024年9月21日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《中共中央办公厅国务院办公厅关于加快公共数据资源开发利用的意见》（2024年9月21日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《中共中央办公厅国务院办公厅关于加快公共数据资源开发利用的意见》（2024年9月21日）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-61",
      "policyTitle": "《关于加强数据资产管理的指导意见》（财资〔2023〕141号）",
      "docNo": "财资〔2023〕141号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于加强数据资产管理的指导意见》（财资〔2023〕141号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于加强数据资产管理的指导意见》（财资〔2023〕141号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于加强数据资产管理的指导意见》（财资〔2023〕141号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于加强数据资产管理的指导意见》（财资〔2023〕141号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-62",
      "policyTitle": "《关于加强行政事业单位数据资产管理的通知》（财资〔2024〕1号）",
      "docNo": "财资〔2024〕1号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于加强行政事业单位数据资产管理的通知》（财资〔2024〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于加强行政事业单位数据资产管理的通知》（财资〔2024〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于加强行政事业单位数据资产管理的通知》（财资〔2024〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于加强行政事业单位数据资产管理的通知》（财资〔2024〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-63",
      "policyTitle": "《数据资产全过程管理试点方案》（财资〔2024〕167号）",
      "docNo": "财资〔2024〕167号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《数据资产全过程管理试点方案》（财资〔2024〕167号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《数据资产全过程管理试点方案》（财资〔2024〕167号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《数据资产全过程管理试点方案》（财资〔2024〕167号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《数据资产全过程管理试点方案》（财资〔2024〕167号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-64",
      "policyTitle": "《公共数据资源授权运营实施规范（试行）》发改数据规〔2025〕27号",
      "docNo": "发改数据规〔2025〕27号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《公共数据资源授权运营实施规范（试行）》发改数据规〔2025〕27号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《公共数据资源授权运营实施规范（试行）》发改数据规〔2025〕27号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《公共数据资源授权运营实施规范（试行）》发改数据规〔2025〕27号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《公共数据资源授权运营实施规范（试行）》发改数据规〔2025〕27号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-65",
      "policyTitle": "《关于加强行政事业单位固定资产管理的通知》（财资〔2020〕97号）",
      "docNo": "财资〔2020〕97号",
      "issuingAuthority": "国家",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于加强行政事业单位固定资产管理的通知》（财资〔2020〕97号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于加强行政事业单位固定资产管理的通知》（财资〔2020〕97号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于加强行政事业单位固定资产管理的通知》（财资〔2020〕97号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于加强行政事业单位固定资产管理的通知》（财资〔2020〕97号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-66",
      "policyTitle": "《广东省行政事业性国有资产管理办法》(粤财资(2024)5号)",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省行政事业性国有资产管理办法》(粤财资(2024)5号)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省行政事业性国有资产管理办法》(粤财资(2024)5号)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省行政事业性国有资产管理办法》(粤财资(2024)5号)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省行政事业性国有资产管理办法》(粤财资(2024)5号)》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-67",
      "policyTitle": "《广东省财政厅关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》粤财资〔2024〕50号",
      "docNo": "财资〔2024〕50号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省财政厅关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》粤财资〔2024〕50号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省财政厅关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》粤财资〔2024〕50号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省财政厅关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》粤财资〔2024〕50号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省财政厅关于强化制度执行进一步推动行政事业性国有资产管理提质增效的通知》粤财资〔2024〕50号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-68",
      "policyTitle": "《广东省省直行政事业单位国有资产处置管理暂行办法》（粤管〔2023〕22号）（2023年修订）",
      "docNo": "粤管〔2023〕22号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省省直行政事业单位国有资产处置管理暂行办法》（粤管〔2023〕22号）（2023年修订）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省省直行政事业单位国有资产处置管理暂行办法》（粤管〔2023〕22号）（2023年修订）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省省直行政事业单位国有资产处置管理暂行办法》（粤管〔2023〕22号）（2023年修订）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省省直行政事业单位国有资产处置管理暂行办法》（粤管〔2023〕22号）（2023年修订）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-69",
      "policyTitle": "《广东省省直行政事业单位国有资产管理暂行办法》（粤管〔2025〕6号）",
      "docNo": "粤管〔2025〕6号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省省直行政事业单位国有资产管理暂行办法》（粤管〔2025〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省省直行政事业单位国有资产管理暂行办法》（粤管〔2025〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省省直行政事业单位国有资产管理暂行办法》（粤管〔2025〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省省直行政事业单位国有资产管理暂行办法》（粤管〔2025〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-70",
      "policyTitle": "《广东省公共数据资源登记管理实施细则（试行)》(2026-01-01起施行，无独立正式文号）",
      "docNo": "未识别",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省公共数据资源登记管理实施细则（试行)》(2026-01-01起施行，无独立正式文号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省公共数据资源登记管理实施细则（试行)》(2026-01-01起施行，无独立正式文号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省公共数据资源登记管理实施细则（试行)》(2026-01-01起施行，无独立正式文号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省公共数据资源登记管理实施细则（试行)》(2026-01-01起施行，无独立正式文号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-71",
      "policyTitle": "《广东省公共数据资源授权运营价格管理办法》（粤发改规〔2026〕6号）",
      "docNo": "发改规〔2026〕6号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省公共数据资源授权运营价格管理办法》（粤发改规〔2026〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省公共数据资源授权运营价格管理办法》（粤发改规〔2026〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省公共数据资源授权运营价格管理办法》（粤发改规〔2026〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省公共数据资源授权运营价格管理办法》（粤发改规〔2026〕6号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-72",
      "policyTitle": "《广东省公共数据资源授权运营管理办法》（粤政数〔2026〕9号）",
      "docNo": "粤政数〔2026〕9号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省公共数据资源授权运营管理办法》（粤政数〔2026〕9号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省公共数据资源授权运营管理办法》（粤政数〔2026〕9号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省公共数据资源授权运营管理办法》（粤政数〔2026〕9号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省公共数据资源授权运营管理办法》（粤政数〔2026〕9号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-73",
      "policyTitle": "《广东省省直行政事业单位国有资产共享共用管理试行办法》（粤管〔2023〕33号）",
      "docNo": "粤管〔2023〕33号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省省直行政事业单位国有资产共享共用管理试行办法》（粤管〔2023〕33号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省省直行政事业单位国有资产共享共用管理试行办法》（粤管〔2023〕33号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省省直行政事业单位国有资产共享共用管理试行办法》（粤管〔2023〕33号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省省直行政事业单位国有资产共享共用管理试行办法》（粤管〔2023〕33号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-74",
      "policyTitle": "《广东省省直行政事业单位国有资产对外出租出借管理暂行办法》（粤财资〔2018〕22号）",
      "docNo": "财资〔2018〕22号",
      "issuingAuthority": "广东省",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《广东省省直行政事业单位国有资产对外出租出借管理暂行办法》（粤财资〔2018〕22号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《广东省省直行政事业单位国有资产对外出租出借管理暂行办法》（粤财资〔2018〕22号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《广东省省直行政事业单位国有资产对外出租出借管理暂行办法》（粤财资〔2018〕22号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《广东省省直行政事业单位国有资产对外出租出借管理暂行办法》（粤财资〔2018〕22号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-75",
      "policyTitle": "《深圳经济特区数据条例》（深圳市第七届人民代表大会常务委员会公告第10号）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳经济特区数据条例》（深圳市第七届人民代表大会常务委员会公告第10号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳经济特区数据条例》（深圳市第七届人民代表大会常务委员会公告第10号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳经济特区数据条例》（深圳市第七届人民代表大会常务委员会公告第10号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳经济特区数据条例》（深圳市第七届人民代表大会常务委员会公告第10号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-76",
      "policyTitle": "《深圳市“数据要素×”赋能经济社会高质量发展实施方案（2025—2026年)》（深政数〔2025〕24号）",
      "docNo": "深政数〔2025〕24号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市“数据要素×”赋能经济社会高质量发展实施方案（2025—2026年)》（深政数〔2025〕24号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市“数据要素×”赋能经济社会高质量发展实施方案（2025—2026年)》（深政数〔2025〕24号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市“数据要素×”赋能经济社会高质量发展实施方案（2025—2026年)》（深政数〔2025〕24号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市“数据要素×”赋能经济社会高质量发展实施方案（2025—2026年)》（深政数〔2025〕24号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-77",
      "policyTitle": "《深圳市本级行政事业单位国有资产使用办法》深财资规〔2011〕14号",
      "docNo": "财资规〔2011〕14号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市本级行政事业单位国有资产使用办法》深财资规〔2011〕14号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市本级行政事业单位国有资产使用办法》深财资规〔2011〕14号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市本级行政事业单位国有资产使用办法》深财资规〔2011〕14号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市本级行政事业单位国有资产使用办法》深财资规〔2011〕14号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-78",
      "policyTitle": "《深圳市数据产权登记管理暂行办法》（深发改规〔2023〕5号）",
      "docNo": "发改规〔2023〕5号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市数据产权登记管理暂行办法》（深发改规〔2023〕5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市数据产权登记管理暂行办法》（深发改规〔2023〕5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市数据产权登记管理暂行办法》（深发改规〔2023〕5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市数据产权登记管理暂行办法》（深发改规〔2023〕5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-79",
      "policyTitle": "《深圳市行政事业单位国有资产处置办法》深财资〔2023〕42号",
      "docNo": "财资〔2023〕42号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市行政事业单位国有资产处置办法》深财资〔2023〕42号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市行政事业单位国有资产处置办法》深财资〔2023〕42号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市行政事业单位国有资产处置办法》深财资〔2023〕42号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市行政事业单位国有资产处置办法》深财资〔2023〕42号》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-80",
      "policyTitle": "《深圳市行政事业性国有资产管理办法》（深府办[2022]5号）",
      "docNo": "深府办[2022]5号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市行政事业性国有资产管理办法》（深府办[2022]5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市行政事业性国有资产管理办法》（深府办[2022]5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市行政事业性国有资产管理办法》（深府办[2022]5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市行政事业性国有资产管理办法》（深府办[2022]5号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-81",
      "policyTitle": "深圳市财政局关于市本级行政事业单位固定资产报废后交由统一回收平台集中处理的通知（深财资〔2021〕8号）",
      "docNo": "财资〔2021〕8号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《深圳市财政局关于市本级行政事业单位固定资产报废后交由统一回收平台集中处理的通知（深财资〔2021〕8号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《深圳市财政局关于市本级行政事业单位固定资产报废后交由统一回收平台集中处理的通知（深财资〔2021〕8号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《深圳市财政局关于市本级行政事业单位固定资产报废后交由统一回收平台集中处理的通知（深财资〔2021〕8号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《深圳市财政局关于市本级行政事业单位固定资产报废后交由统一回收平台集中处理的通知（深财资〔2021〕8号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-82",
      "policyTitle": "《龙华区公共数据资源授权运营实施细则（试行）》(深龙华政数规〔2025〕1号）",
      "docNo": "深龙华政数规〔2025〕1号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《龙华区公共数据资源授权运营实施细则（试行）》(深龙华政数规〔2025〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《龙华区公共数据资源授权运营实施细则（试行）》(深龙华政数规〔2025〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《龙华区公共数据资源授权运营实施细则（试行）》(深龙华政数规〔2025〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《龙华区公共数据资源授权运营实施细则（试行）》(深龙华政数规〔2025〕1号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-83",
      "policyTitle": "《福田区公共数据资源授权运营实施方案（试行）》（暂无公开发文号，2026年1月1日施行）",
      "docNo": "未识别",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "政务服务和数据管理部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《福田区公共数据资源授权运营实施方案（试行）》（暂无公开发文号，2026年1月1日施行）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《福田区公共数据资源授权运营实施方案（试行）》（暂无公开发文号，2026年1月1日施行）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《福田区公共数据资源授权运营实施方案（试行）》（暂无公开发文号，2026年1月1日施行）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《福田区公共数据资源授权运营实施方案（试行）》（暂无公开发文号，2026年1月1日施行）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    },
    {
      "policyId": "AST-84",
      "policyTitle": "《关于加强市属国有企业资源性资产租赁综合监管的指导意见（试行)》（深国资委〔2025〕168号）",
      "docNo": "深国资委〔2025〕168号",
      "issuingAuthority": "深圳市",
      "issueDate": "待复核",
      "effectiveDate": "待复核",
      "expiryDate": "待复核",
      "validityNote": "本条为依据文件名和目录结构生成的候选解读；正式引用前需复核发布机关原文、现行有效性和适用范围。",
      "responsibleUnits": [
        "财政部门",
        "项目单位"
      ],
      "implementationFlow": [
        "配置登记",
        "使用运营",
        "处置盘活",
        "报告监督"
      ],
      "implementationFlowDetails": [
        {
          "order": 1,
          "title": "配置登记",
          "action": "建立资产配置、登记、权属、卡片和数据资产台账。",
          "leadUnit": "主管部门"
        },
        {
          "order": 2,
          "title": "使用运营",
          "action": "规范使用、共享共用、出租出借、授权运营和安全合规。",
          "leadUnit": "主管部门"
        },
        {
          "order": 3,
          "title": "处置盘活",
          "action": "推进报废处置、盘活存量、收益管理和扩大有效投资。",
          "leadUnit": "主管部门"
        },
        {
          "order": 4,
          "title": "报告监督",
          "action": "开展资产报告、审计监督、绩效评价和制度执行检查。",
          "leadUnit": "主管部门"
        }
      ],
      "policyTasks": [
        {
          "title": "建立资产和数据资产台账",
          "description": "围绕《关于加强市属国有企业资源性资产租赁综合监管的指导意见（试行)》（深国资委〔2025〕168号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "规范配置使用与共享共用",
          "description": "围绕《关于加强市属国有企业资源性资产租赁综合监管的指导意见（试行)》（深国资委〔2025〕168号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "推进处置盘活和授权运营",
          "description": "围绕《关于加强市属国有企业资源性资产租赁综合监管的指导意见（试行)》（深国资委〔2025〕168号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        },
        {
          "title": "完善资产报告和监督评价",
          "description": "围绕《关于加强市属国有企业资源性资产租赁综合监管的指导意见（试行)》（深国资委〔2025〕168号）》在资产管理中的适用要求，形成可跟踪的项目管理任务。",
          "evidence": "待从正式文本中补充条款证据。",
          "status": "目录结构候选提取"
        }
      ],
      "mappedUnits": [
        {
          "unitId": "unit-policy-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-asset-ledger",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-data-asset",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        },
        {
          "unitId": "unit-supervision",
          "supportStrength": "候选支撑",
          "reviewStatus": "待原文复核",
          "reason": "资产管理政策与资产管理主题存在目录层级关联。"
        }
      ],
      "evidenceExcerpts": [
        {
          "title": "待补充原文摘录",
          "excerpt": "当前版本先完成政策清单、层级和附件体系重建，原文条款将在深度抽取后补充。",
          "source": "本地政策清单目录"
        }
      ],
      "designActions": [
        {
          "unitId": "unit-policy-ledger",
          "unitName": "unit-policy-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-asset-ledger",
          "unitName": "unit-asset-ledger",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-data-asset",
          "unitName": "unit-data-asset",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        },
        {
          "unitId": "unit-supervision",
          "unitName": "unit-supervision",
          "action": "将该政策纳入资产管理政策依据库，补充责任单位、流程节点和条款证据。",
          "deliverable": "政策依据台账、任务清单、流程节点和证据索引",
          "status": "待细化"
        }
      ],
      "hasDetailPage": true,
      "extractionStatus": "已按目录结构生成候选解读",
      "sourceTextFile": ""
    }
  ],
  "relationships": []
};
