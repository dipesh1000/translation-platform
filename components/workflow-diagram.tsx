"use client"

export function WorkflowDiagram() {
  return (
    <div className="w-full overflow-x-auto p-3 sm:p-6">
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-auto min-h-[400px] sm:min-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
          </marker>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="1200" height="800" fill="hsl(var(--background))" />

        {/* Title */}
        <text
          x="600"
          y="40"
          textAnchor="middle"
          fontSize="24"
          fontWeight="bold"
          fill="hsl(var(--foreground))"
        >
          Translation Platform Workflow Automation
        </text>

        {/* Start */}
        <g>
          <rect
            x="50"
            y="100"
            width="120"
            height="60"
            rx="10"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <text
            x="110"
            y="135"
            textAnchor="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
          >
            WhatsApp
          </text>
          <text
            x="110"
            y="150"
            textAnchor="middle"
            fontSize="12"
            fill="white"
          >
            Inquiry
          </text>
        </g>

        {/* Email Input */}
        <g>
          <rect
            x="50"
            y="200"
            width="120"
            height="60"
            rx="10"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <text
            x="110"
            y="235"
            textAnchor="middle"
            fontSize="14"
            fill="white"
            fontWeight="bold"
          >
            Email
          </text>
          <text
            x="110"
            y="250"
            textAnchor="middle"
            fontSize="12"
            fill="white"
          >
            Parser
          </text>
        </g>

        {/* Decision: New Customer? */}
        <g>
          <polygon
            points="300,130 380,100 380,160 300,160"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="340"
            y="135"
            textAnchor="middle"
            fontSize="12"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            New
          </text>
          <text
            x="340"
            y="150"
            textAnchor="middle"
            fontSize="12"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Customer?
          </text>
        </g>

        {/* Customer Creation */}
        <g>
          <rect
            x="450"
            y="100"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--secondary))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="520"
            y="130"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Create Customer
          </text>
          <text
            x="520"
            y="145"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            Auto Folder
          </text>
        </g>

        {/* File Upload */}
        <g>
          <rect
            x="650"
            y="100"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--secondary))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="720"
            y="130"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            File Upload
          </text>
          <text
            x="720"
            y="145"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            Auto Folder
          </text>
        </g>

        {/* Project Creation */}
        <g>
          <rect
            x="850"
            y="100"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--secondary))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="920"
            y="130"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Create Project
          </text>
          <text
            x="920"
            y="145"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            Language Pair
          </text>
        </g>

        {/* Task Assignment */}
        <g>
          <rect
            x="300"
            y="250"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="370"
            y="280"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Task Assignment
          </text>
          <text
            x="370"
            y="295"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            Auto Assign
          </text>
        </g>

        {/* Translation */}
        <g>
          <rect
            x="500"
            y="250"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="570"
            y="280"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Translation
          </text>
          <text
            x="570"
            y="295"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            In Progress
          </text>
        </g>

        {/* Review */}
        <g>
          <rect
            x="700"
            y="250"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="770"
            y="280"
            textAnchor="middle"
            fontSize="13"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Review
          </text>
          <text
            x="770"
            y="295"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            Quality Check
          </text>
        </g>

        {/* Final Delivery */}
        <g>
          <rect
            x="900"
            y="250"
            width="140"
            height="60"
            rx="10"
            fill="hsl(142, 76%, 36%)"
            stroke="hsl(var(--border))"
            strokeWidth="2"
          />
          <text
            x="970"
            y="280"
            textAnchor="middle"
            fontSize="13"
            fill="white"
            fontWeight="bold"
          >
            Final Delivery
          </text>
          <text
            x="970"
            y="295"
            textAnchor="middle"
            fontSize="11"
            fill="white"
          >
            Send Files
          </text>
        </g>

        {/* Closure */}
        <g>
          <rect
            x="700"
            y="400"
            width="140"
            height="60"
            rx="10"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
          <text
            x="770"
            y="430"
            textAnchor="middle"
            fontSize="13"
            fill="white"
            fontWeight="bold"
          >
            Project
          </text>
          <text
            x="770"
            y="445"
            textAnchor="middle"
            fontSize="13"
            fill="white"
            fontWeight="bold"
          >
            Closure
          </text>
        </g>

        {/* Automation Triggers */}
        <g>
          <rect
            x="50"
            y="500"
            width="200"
            height="80"
            rx="10"
            fill="hsl(var(--muted))"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <text
            x="150"
            y="530"
            textAnchor="middle"
            fontSize="14"
            fill="hsl(var(--foreground))"
            fontWeight="bold"
          >
            Automation Triggers
          </text>
          <text
            x="150"
            y="550"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            • WhatsApp Message → Create Inquiry
          </text>
          <text
            x="150"
            y="565"
            textAnchor="middle"
            fontSize="11"
            fill="hsl(var(--muted-foreground))"
          >
            • Email Attachment → Auto Upload
          </text>
        </g>

        {/* Arrows */}
        <line
          x1="170"
          y1="130"
          x2="300"
          y2="130"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="170"
          y1="230"
          x2="300"
          y2="160"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="380"
          y1="130"
          x2="450"
          y2="130"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="590"
          y1="130"
          x2="650"
          y2="130"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="790"
          y1="130"
          x2="850"
          y2="130"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="920"
          y1="160"
          x2="370"
          y2="250"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="440"
          y1="280"
          x2="500"
          y2="280"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="640"
          y1="280"
          x2="700"
          y2="280"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="840"
          y1="280"
          x2="900"
          y2="280"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="970"
          y1="310"
          x2="770"
          y2="400"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />
      </svg>
    </div>
  )
}

