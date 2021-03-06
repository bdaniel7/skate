defmodule Util.Duration do
  @moduledoc """
  Duration related utility functions.
  """
  require Logger

  @doc """
  Logs how long a function call took.
  """
  @spec log_duration(atom, atom, [any]) :: any
  def log_duration(module, function, args) do
    {time, result} = :timer.tc(module, function, args)
    time = time / :timer.seconds(1)

    if Application.get_env(:skate, :log_duration_timing, true) do
      _ =
        Logger.info(fn ->
          "Function duration, module=#{module} function=#{function} duration=#{time}"
        end)
    end

    result
  end
end
